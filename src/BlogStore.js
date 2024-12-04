import { configureStore } from '@reduxjs/toolkit'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import blogNotificationReducer from './reducers/blogNotificationReducer'

const BlogStore = configureStore({
  reducer: {
    blogs: blogReducer,
    user: userReducer,
    blogNotification: blogNotificationReducer,
  },
})

export default BlogStore
