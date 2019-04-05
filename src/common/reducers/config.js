import createReducer from './createReducer'

const initialState = {
  apiUrl: process.env.apiUrl || 'http://localhost:8080',
}

export default createReducer(initialState)
