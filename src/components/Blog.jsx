import { useState, forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import CommentForm from './CommentForm'

const Blog = ({
  blog,
  handleLike,
  handleDeleteButton,
  handleAddComment,
  user,
}) => {
  // Return early if blog is not yet loaded
  if (!blog) {
    return <div>Loading...</div>
  }

  const [visible, setVisible] = useState(false)
  const [likes, setLikes] = useState(blog.likes)

  const showWhenVisible = { display: visible ? '' : 'none' }
  const buttonLable = visible ? 'hide' : 'view'
  // Safer check for user object
  //console.log('blog', blog)

  const hasUser = blog.user && typeof blog.user === 'object'
  //console.log('hasuser', hasUser)

  // Check if current user is the creator - do this ONCE
  const isCreator = hasUser && user && blog.user.username === user.username //this only works if users arent allowed to change username, otherwize would have to decode id upon logi and stor in user object
  //console.log('iscreator', isCreator)

  Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleLike: PropTypes.func.isRequired,
    handleDeleteButton: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
  }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const handleDelete = (event) => {
    if (window.confirm(`Remove blog ${blog.title} by ${blog.author}?`)) {
      handleDeleteButton(blog)
    }
  }

  const likeThisBlog = (event) => {
    const updatedBlog = {
      ...blog,
      user: blog.user.id || blog.user, // Handle both string ID and object cases
      likes: blog.likes + 1,
    }

    handleLike(blog.id, updatedBlog)
    setLikes(updatedBlog.likes)
  }

  const handleComment = (comment) => {
    const updatedBlog = {
      ...blog,
      user: blog.user.id || blog.user, // Handle both string ID and object cases
      comments: blog.comments.concat(comment),
    }
    handleAddComment(blog.id, updatedBlog)

    //    setLikes(updatedBlog.likes) //check if re-renders without this // i guess redux makes this irrelevant/redundant
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5,
  }

  return (
    <div style={blogStyle} className="blogView">
      {blog.title} {blog.author}
      <button data-testid="viewDetails" onClick={toggleVisibility}>
        {buttonLable}
      </button>
      <div style={showWhenVisible} className="blogDetails">
        <p>{blog.url}</p>
        <p>
          {blog.likes} likes <button onClick={likeThisBlog}>like</button>
        </p>
        {/* Only show user name if we have a user object with a name property */}
        {hasUser && blog.user.name && <p>added by {blog.user.name}</p>}
        {isCreator && <button onClick={handleDelete}>Delete</button>}
      </div>
      <h2>comments</h2>
      <CommentForm addComment={handleComment} />
      <ul>
        {Array.isArray(blog.comments) &&
          blog.comments.length &&
          blog.comments.map((comment) => <li key={comment}>{comment}</li>)}
      </ul>
    </div>
  )
}

export default Blog
