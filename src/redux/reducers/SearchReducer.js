
export default function SearchReducer(state = {}, action) {
  const { type, payload, meta } = action
  
  switch (type) {

    case NOTEBOOK_LOADED: {
      return {...state,  note:payload}
    }
    case NOTEBOOK_LOADING_ERROR: {
      return {...state, error: payload} }
    default: {
      return state
    }
  }
}