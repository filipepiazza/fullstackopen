import React from 'react'
import { useSelector } from 'react-redux'
import { useMessageValue } from '../NotificationContext'

const AnecdoteNotification = () => {
  // const notification = useSelector((state) => state.notification) //redux
  const notification = useMessageValue()

  if (!notification) return null

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  }

  return <div style={style}>{notification}</div>
}

export default AnecdoteNotification
