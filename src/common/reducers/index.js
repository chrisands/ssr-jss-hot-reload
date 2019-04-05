import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import config from './config'

export default history => combineReducers({
  router: connectRouter(history),
  config,
})
