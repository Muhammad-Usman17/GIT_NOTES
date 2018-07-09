
import initialState from './initialState';

export default function SearchReducer(state = {}, action) {
  const { type, payload, meta } = action
  
  switch (type) {
    case "SINGLE_GIST_SUCCESS": {
      const { id } = meta
      return {...state, single_gist: payload}
    }
    case "SINGLE_GIST_FAILED": {
      const { id } = meta
      return {...state, [id]: payload} }
    default: {
      return state
    }
  }
}