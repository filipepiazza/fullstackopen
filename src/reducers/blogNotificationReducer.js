import { createSlice } from '@reduxjs/toolkit'

const blogNotificationSlice = createSlice({
  name: 'blogNotification',
  initialState: {
    message: null,
    style: 'green',
  },
  reducers: {
    setNotification: (state, action) => {
      return action.payload
    },
    resetNotification: (state) => {
      state.message = null
    },
  },
})

export const { setNotification, resetNotification } =
  blogNotificationSlice.actions

export const showNotification = (content, delay, color) => {
  return async (dispatch) => {
    const notification = {
      message: content,
      style: color,
    }
    await dispatch(setNotification(notification))
    setTimeout(() => {
      dispatch(resetNotification())
    }, delay)
  }
}

export default blogNotificationSlice.reducer
