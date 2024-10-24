import { useState, forwardRef, useImperativeHandle } from 'react'

const Blog = ({ blog, handleLike, handleDeleteButton, user }) => {
    const [visible, setVisible] = useState(false)
    const [likes, setLikes] = useState(blog.likes)

  const showWhenVisible = { display: visible ? '' : 'none' }
  const buttonLable = visible ? 'hide' : 'view'
  // Safer check for user object
  const hasUser = blog.user && (typeof blog.user === 'object')

  // Check if current user is the creator - do this ONCE
  const isCreator = hasUser && user && blog.user.username === user.username//this only works if users arent allowed to change username, otherwize would have to decode id upon logi and stor in user object
  console.log(blog);
  console.log(user);
  
console.log(isCreator);

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
      user: blog.user.id  || blog.user,// Handle both string ID and object cases
      likes: blog.likes + 1
    }
    
    handleLike(blog.id, updatedBlog)
    setLikes(updatedBlog.likes)
  }

    const blogStyle = {
        paddingTop: 10,
        paddingLeft: 2,
        border: 'solid',
        borderWidth: 1,
        marginBottom: 5
      }

      return (
    <div style={blogStyle}>
      {blog.title} {blog.author}
      <button onClick={toggleVisibility}>{buttonLable}</button>
      <div style={showWhenVisible}>
        <p>{blog.url}</p> 
        <p>{blog.likes} <button onClick={likeThisBlog}>like</button></p>
         {/* Only show user name if we have a user object with a name property */}
        {hasUser && blog.user.name && <p>{blog.user.name}</p>}
        {isCreator && (<button onClick={handleDelete}>Delete</button>)}
      </div>
    </div>  
  )
}
  
  export default Blog