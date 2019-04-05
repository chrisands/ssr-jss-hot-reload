import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from '../reducers'
// import api

const configureStore = (initialState, history) => {
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

  const enhancer = composeEnhancers(
    applyMiddleware(
      routerMiddleware(history),
    ),
  )

  const store = createStore(createRootReducer(history), initialState, enhancer)

  return {
    store,
  }
}

export default configureStore
