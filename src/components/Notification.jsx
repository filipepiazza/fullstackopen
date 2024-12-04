import { Alert } from '@mui/material'

const Notification = ({ notification }) => {
  const notificationStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: 20,
    borderStyle: 'solid',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  }

  const currentNotificationStyle = {
    ...notificationStyle,
    color: notification.style,
  }

  if (notification.message === null) {
    return null
  }

  return <Alert style={currentNotificationStyle}>{notification.message}</Alert>
}

export default Notification
