import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import {
  setNotification,
  clearNotification,
  showNotification,
} from '../reducers/notificationReducer'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { createNewAnecdote } from '../requests'
import NotificationContext, {
  useNotificationDispatch,
} from '../NotificationContext'
import { showReducerNotification } from '../NotificationContext'
import { useContext } from 'react'

const NewEntry = () => {
  const dispatch = useDispatch() //redux
  const queryClient = useQueryClient() //reactquery
  const dispatchReducer = useNotificationDispatch()

  const newAnecdoteMutation = useMutation({
    mutationFn: createNewAnecdote,
    onSuccess: (newAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(['anecdotes'], anecdotes.concat(newAnecdote))
      dispatchReducer({
        type: 'SET',
        payload: `new anecdote '${newAnecdote.content}'`,
      })
      setTimeout(() => {
        dispatchReducer({ type: 'CLEAR' })
      }, 5000)
    },
    onError: (Error) => {
      dispatchReducer({
        type: 'SET',
        payload: `error: '${Error}'`,
      })
      setTimeout(() => {
        dispatchReducer({ type: 'CLEAR' })
      }, 5000)
    },
  })

  const addEntry = async (event) => {
    event.preventDefault()
    const content = event.target.text.value
    event.target.text.value = ''
    //  dispatch(createAnecdote(content)) //redux
    newAnecdoteMutation.mutate({ content, votes: 0 })
    // Show notification
    //dispatch(showNotification(`new anecdote '${content}'`))//redux
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addEntry}>
        <div>
          <input name="text" />
        </div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default NewEntry
