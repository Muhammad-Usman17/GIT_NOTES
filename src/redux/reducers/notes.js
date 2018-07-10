import * as types from '../actions'
export default function notes(state = {}, action) {
  const { type, payload } = action
  
  switch (type) {

    case types.NOTEBOOK_LOADED: {
      return {...state,  note:payload}
    }
    case types.SINGLE_NOTEBOOK_SUCCESS: {
      return {...state,  note:payload}
    }
    case types.SINGLE_NOTEBOOK_FAILED: {
      return {...state,  error:payload}
    }
    case types.NOTEBOOK_LOADING_ERROR: {
      return {...state, error: payload} }
    default: {
      return state
    }
  }
}