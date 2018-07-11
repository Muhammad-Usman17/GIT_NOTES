// libs
import { combineReducers } from 'redux';

// src
import * as ActionTypes from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.NOTEBOOK_LOADED:
    case ActionTypes.SINGLE_NOTEBOOK: {
      return true;
    }
    case ActionTypes.NOTEBOOK_LOADING_SUCCESS:
    case ActionTypes.SINGLE_NOTEBOOK_SUCCESS:
    case ActionTypes.SINGLE_NOTEBOOK_FAILED:
    case ActionTypes.NOTEBOOK_LOADING_ERROR: {
      return false;
    }
    default: {
      return state;
    }
  }
};
function mainReducer(state = {}, action) {
  const { type, payload, meta } = action;

  switch (type) {
    case ActionTypes.NOTEBOOK_LOADING_SUCCESS: {
      const { id } = meta;
      return { ...state, [id]: payload };
    }
    case ActionTypes.SINGLE_NOTEBOOK_SUCCESS: {
      const { id } = meta;
      return { ...state, [id]: payload };
    }
    case ActionTypes.SINGLE_NOTEBOOK_FAILED: {
      return { ...state, error: payload };
    }
    case ActionTypes.NOTEBOOK_LOADING_ERROR: {
      return { ...state, error: payload };
    }
    default: {
      return state;
    }
  }
}

export default combineReducers({
  mainReducer,
  isLoading,
});
