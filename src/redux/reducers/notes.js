import * as types from '../actions';

export default function notes(state = {}, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case types.NOTEBOOK_LOADED: {
      const { id } = meta;
      return { ...state, [id]: payload };
    }
    case types.SINGLE_NOTEBOOK_SUCCESS: {
      const { id } = meta;
      return { ...state, [id]: payload };
    }
    case types.SINGLE_NOTEBOOK_FAILED: {
      return { ...state, error: payload };
    }
    case types.NOTEBOOK_LOADING_ERROR: {
      return { ...state, error: payload };
    }
    default: {
      return state;
    }
  }
}
