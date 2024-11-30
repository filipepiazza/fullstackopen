// import ReactDOM from 'react-dom/client'

// import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

//-------------------------------------------------------------------

// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import { createStore } from 'redux'
// import reducer from './reducers/reducer'

// import { Provider } from 'react-redux'
// import { useSelector, useDispatch } from 'react-redux'

// import { good, ok, bad, zero } from './reducers/reducer'

// const store = createStore(reducer)

// const App = () => {
//   const dispatch = useDispatch()
//   const uni = useSelector((state) => state)

//   return (
//     <div>
//       <button onClick={() => dispatch(good())}>good</button>
//       <button onClick={() => dispatch(ok())}>ok</button>
//       <button onClick={() => dispatch(bad())}>bad</button>
//       <button onClick={() => dispatch(zero())}>reset stats</button>
//       <div>good {uni.good}</div>
//       <div>ok {uni.ok}</div>
//       <div>bad {uni.bad}</div>
//     </div>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'))

// const renderApp = () => {
//   root.render(
//     <Provider store={store}>
//       <App />
//     </Provider>
//   )
// }

// renderApp()
// store.subscribe(renderApp)

//--------------------------------------------------------------------

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NotificationContextProvider } from './NotificationContext'
import { BrowserRouter as Router } from 'react-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <NotificationContextProvider>
        <Router>
          <App />
        </Router>
      </NotificationContextProvider>
    </QueryClientProvider>
  </Provider>
)
