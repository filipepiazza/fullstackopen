import { createContext, useContext } from 'react'
import { useReducer } from 'react'

const NotificationContext = createContext()

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'CLEAR':
      return null
    default:
      return state
  }
}

export const NotificationContextProvider = (props) => {
  const [message, notificationDispatch] = useReducer(notificationReducer, null)

  return (
    <NotificationContext.Provider value={[message, notificationDispatch]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

export const useMessageValue = () => {
  const messageAndDispatch = useContext(NotificationContext)
  return messageAndDispatch[0]
}

export const useNotificationDispatch = () => {
  const messageAndDispatch = useContext(NotificationContext)
  return messageAndDispatch[1]
}

export const showReducerNotification = (content, delay) => {
  const dispatchReducer = useNotificationDispatch()
  dispatchReducer({ type: 'SET', payload: content })
  setTimeout(() => {
    dispatchReducer({ type: 'CLEAR' })
  }, delay)
}

export default NotificationContext
