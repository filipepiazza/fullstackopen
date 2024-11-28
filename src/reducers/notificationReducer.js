import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: null,
  reducers: {
    setNotification: (state, action) => {
      return action.payload
    },
    clearNotification: (state) => {
      return null
    },
  },
})

export const { setNotification, clearNotification } = notificationSlice.actions

export const showNotification = (content, delay) => {
  return async (dispatch) => {
    await dispatch(setNotification(content))
    setTimeout(() => {
      dispatch(clearNotification())
    }, delay)
  }
}
export default notificationSlice.reducer
