import { useState } from 'react'
import PropTypes from 'prop-types'
import { Button, TextField } from '@mui/material'

export default function CommentForm({ addComment }) {
  const [comment, setComment] = useState('')

  CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
  }

  const addThisComment = (event) => {
    event.preventDefault()
    addComment(comment)
    setComment('')
  }

  return (
    <>
      <form onSubmit={addThisComment}>
        <div>
          <TextField
            data-testid="comment"
            value={comment}
            onChange={({ target }) => setComment(target.value)}
            placeholder="write comment here"
          />
        </div>

        <div>
          <Button type="submit">add comment</Button>
        </div>
      </form>
    </>
  )
}
