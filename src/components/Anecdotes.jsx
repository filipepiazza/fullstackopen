import { useDispatch, useSelector } from 'react-redux'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAnecdotes, updateAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const Anecdote = ({ anecdote, handleClick }) => {
  return (
    <div key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={handleClick}>vote</button>
      </div>
    </div>
  )
}

const Anecdotes = () => {
  const queryClient = useQueryClient()
  const reducerDispatch = useNotificationDispatch()
  ///redux structure
  const dispatch = useDispatch()
  const anecdotesRedux = useSelector((state) => {
    if (state.filter === 'ALL') {
      return state.anecdotes
    }
    return state.anecdotes.filter((anecdote) =>
      anecdote.content.includes(state.filter)
    )
  })

  const result = useQuery({
    queryKey: ['anecdotes'],
    queryFn: getAnecdotes,
    refetchOnWindowFocus: false,
    retry: 1,
  })
  console.log(JSON.parse(JSON.stringify(result)))

  const updateAnecdoteMutation = useMutation({
    mutationFn: updateAnecdote,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({ queryKey: ['anecdotes'] })
    // },
    onSuccess: (updatedAnecdote) => {
      const anecdotes = queryClient.getQueryData(['anecdotes'])
      queryClient.setQueryData(
        ['anecdotes'],
        anecdotes.map((anecdote) =>
          anecdote.id === updatedAnecdote.id ? updatedAnecdote : anecdote
        )
      )
      reducerDispatch({
        type: 'SET',
        payload: `you voted '${updatedAnecdote.content}'`,
      })
      setTimeout(() => {
        reducerDispatch({ type: 'CLEAR' })
      }, 5000)
    },
    onError: (Error) => {
      reducerDispatch({
        type: 'SET',
        payload: `error: '${Error}'`,
      })
      setTimeout(() => {
        reducerDispatch({ type: 'CLEAR' })
      }, 5000)
    },
  })

  if (result.isLoading) {
    return <div>loading data...</div>
  }

  if (result.isError) {
    return <span>Error: anecdote service not available</span>
  }

  const anecdotes = result.data.sort((a, b) => b.votes - a.votes)

  const handleVote = (id) => {
    const votedAnecdote = anecdotes.find((a) => a.id === id)
    //dispatch(voteAnecdote(votedAnecdote)) // redux
    updateAnecdoteMutation.mutate({
      ...votedAnecdote,
      votes: votedAnecdote.votes + 1,
    })

    //dispatch(showNotification(`you voted '${votedAnecdote.content}'`, 5000)) //redux
  }

  console.log('anecdotes d', anecdotes)

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          handleClick={() => handleVote(anecdote.id)}
        />
      ))}
    </div>
  )
}

export default Anecdotes
