// libs
import { combineReducers } from 'redux';

// src
import * as ActionTypes from '../actions';

const isLoading = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.CREATE_NOTEBOOK: {
      return true;
    }
    case ActionTypes.CREATE_NOTEBOOK_SUCCESS:
    case ActionTypes.CREATE_NOTEBOOK_FAILED: {
      return false;
    }
    default: {
      return state;
    }
  }
};

function mainReducer(state = {}, action) {
  const { meta, type, payload, notebooks } = action;
  switch (type) {
    case ActionTypes.CREATE_NOTEBOOK_SUCCESS: {
      console.log('state', state);
      const { notebooks } = state;
      const newArray = [...notebooks, payload];
      return {
        ...state,
        created: false,
        notebooks: newArray,
      };
    }
    case ActionTypes.NOTEBOOK_DELETE_SUCCESS: {
      const { index } = meta;
      const { notebooks } = state;
      const newArray = notebooks.filter(a => notebooks.indexOf(a) !== index);
      return { ...state, deleted: true, notebooks: newArray };
    }
    case ActionTypes.NOTEBOOK_LIST_SUCCESS: {
      console.log('i am list reducer');
      return { ...state, notebooks };
    }
    case ActionTypes.NOTEBOOK_LIST_FAILED: {
      return { ...state, error: payload };
    }

    case ActionTypes.NOTEBOOK_DELETE_FAILED: {
      return { ...state, error: payload, deleted: false };
    }
    case ActionTypes.NOTEBOOK_DELETE_OK: {
      return { ...state, deleted: false };
    }
    case ActionTypes.CREATE_NOTEBOOK_FAILED: {
      return { ...state, created: false };
    }
    case ActionTypes.CREATE_NOTEBOOK_OK: {
      return { ...state, created: false };
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
