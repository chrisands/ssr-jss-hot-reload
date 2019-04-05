const createReducer = (initialState, reducers = {}) => (state = initialState, { type, ...payload }) => {
  const handler = reducers[type]

  return handler ? handler(state, payload) : state
}

export default createReducer
