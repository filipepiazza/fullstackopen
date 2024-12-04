import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'

export default function BlogForm({ createBlog }) {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  BlogForm.propTypes = {
    createBlog: PropTypes.func.isRequired,
  }

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
          title:{' '}
          <TextField
            data-testid="title"
            value={title}
            onChange={({ target }) => setTitle(target.value)}
            placeholder="write title here"
          />
        </div>
        <div>
          author:{' '}
          <TextField
            data-testid="author"
            value={author}
            onChange={({ target }) => setAuthor(target.value)}
            placeholder="write author here"
          />
        </div>
        <div>
          url:{' '}
          <TextField
            data-testid="url"
            value={url}
            onChange={({ target }) => setUrl(target.value)}
            placeholder="write url here"
          />
        </div>
        <div>
          <Button type="submit">add</Button>
        </div>
      </form>
    </>
  )
}
