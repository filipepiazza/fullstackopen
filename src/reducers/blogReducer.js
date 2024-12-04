import { createSlice, current } from '@reduxjs/toolkit'
import BlogService from '../services/BlogService'
import { AxiosError } from 'axios'

function structureBlog(blog, user) {
  const structuredBlog = {
    ...blog,
    user: {
      id: blog.user,
      name: user.name,
      username: user.username,
    },
  }
  return structuredBlog
}

const blogSlice = createSlice({
  name: 'blogs',
  initialState: [],
  reducers: {
    like(state, action) {
      const updatedBlog = action.payload
      return state.map((blog) =>
        blog.id === updatedBlog.id
          ? structureBlog(updatedBlog, blog.user) // Server sends user as ID string,Keep the current user's name
          : blog
      )
    },
    appenBlog(state, action) {
      const updatedBlog = structureBlog(
        action.payload.blog,
        action.payload.user
      )

      state.push(updatedBlog)
    },
    setBlogs(state, action) {
      return action.payload
    },
    deleteOneBlog(state, action) {
      const id = action.payload

      return state.filter((blog) => blog.id !== id)
    },
    commentOnBlog(state, action) {
      //   const comments = action.payload.comments
      const updatedBlog = action.payload
      return state.map((blog) =>
        blog.id === updatedBlog.id
          ? structureBlog(updatedBlog, blog.user) // Server sends user as ID string,Keep the current user's name
          : blog
      )
    },
  },
})

export const { like, appenBlog, setBlogs, deleteOneBlog, commentOnBlog } =
  blogSlice.actions

export const initializeBlogs = () => {
  return async (dispatch) => {
    try {
      const blogs = await BlogService.getAll()
      dispatch(setBlogs(blogs.data))
    } catch (error) {
      throw error
    }
  }
}

export const createBlog = (blog, user) => {
  return async (dispatch) => {
    try {
      const newBlog = await BlogService.create(blog)
      dispatch(appenBlog({ blog: newBlog.data, user }))
    } catch (error) {
      throw error
    }
  }
}

export const removeBlog = (id) => {
  return async (dispatch) => {
    try {
      await BlogService.deleteBlog(id)
      dispatch(deleteOneBlog(id))
    } catch (error) {
      throw error
    }
  }
}

export const likeBlog = (blog, id) => {
  return async (dispatch) => {
    try {
      const responseBlog = await BlogService.update(id, blog)
      dispatch(like(responseBlog.data))
    } catch (error) {
      throw error
    }
  }
}
export const addCommentToBlog = (id, blog) => {
  return async (dispatch) => {
    try {
      const responseBlog = await BlogService.comment(id, blog)
      dispatch(commentOnBlog(responseBlog.data))
    } catch (error) {
      throw Error(error.message) //need to figure out throwing axioserror. ts required?
    }
  }
}

export default blogSlice.reducer
