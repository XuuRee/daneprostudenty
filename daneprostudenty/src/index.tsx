import React from 'react'
import ReactDOM from 'react-dom'
import './Static/Index.css'
import App from './Components/App'
import * as serviceWorker from './serviceWorker'
import { compose, createStore, applyMiddleware } from "redux"
import rootReducer from './Reducer'
import { Provider } from 'react-redux'
import thunk from "redux-thunk";

const composeEnhancers =
  typeof window === "object" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
		: compose

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)))

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
