const Notification = ({ message, currentStyle }) => {

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
      ...notificationStyle, color: currentStyle
    }
   
    if (message === null) {
      return null
    }
  
    return (
      <div style={currentNotificationStyle}>
        {message}
      </div>
    )
  }

export default Notification