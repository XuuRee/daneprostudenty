import React from 'react'
import ReactDOM from 'react-dom'
import './Static/Index.css'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'
import { compose, createStore } from "redux"
import rootReducer from './Reducer'
import { Provider } from 'react-redux'

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const store = createStore(rootReducer, composeEnhancers())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") as HTMLElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
