import { useState } from 'react'

export default function BlogForm({createBlog}){
    const [title, setTitle] = useState('') 
    const [author, setAuthor] = useState('') 
    const [url, setUrl] = useState('') 

    const addBlog = (event) => {
        event.preventDefault()
        createBlog({ title: title, author: author, url: url, likes: 0 })
        setTitle('')
        setAuthor('')
        setUrl('')
      }

    return (
        <>
        <h2>Add New</h2>
        <form onSubmit={addBlog}>
        <div>
          title: <input  value={title} onChange={({ target }) => setTitle(target.value)}/>
        </div>
        <div>author: <input value={author} onChange={({ target }) => setAuthor(target.value)}/></div>
        <div>url: <input value={url} onChange={({ target }) => setUrl(target.value)}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      </>
      );    
}