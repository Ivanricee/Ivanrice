import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Router } from 'react-router'
import { createBrowserHistory } from 'history'

import App from './routes/App'
import reducer from './reducers/index'

//definimos el browserhistory
const history = createBrowserHistory()
preloadedState = window.__PRELOADED_STATE__
const store = createStore(reducer, initialState)
delete window.__PRELOADED_STATE__
ReactDOM.hydrate(
  <Provider store={store}>
    <Router history={history} />
    <App />
  </Provider>,
  document.getElementById('app')
)
