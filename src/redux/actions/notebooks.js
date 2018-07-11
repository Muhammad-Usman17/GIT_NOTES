// src
import notebookApis from '../../api/notebook';

export const CREATE_NOTEBOOK = 'CREATE_NOTEBOOK';
export const CREATE_NOTEBOOK_SUCCESS = 'CREATE_NOTEBOOK_SUCCESS';
export const CREATE_NOTEBOOK_FAILED = 'CREATE_NOTEBOOK_FAILED';

export const NOTEBOOK_LIST = 'NOTEBOOK_LIST';
export const NOTEBOOK_LIST_SUCCESS = 'NOTEBOOK_LIST_SUCCESS';
export const NOTEBOOK_LIST_FAILED = 'NOTEBOOK_LIST_FAILED';

export const NOTEBOOK_DELETE_SUCCESS = 'NOTEBOOK_DELETE_SUCCESS';
export const NOTEBOOK_DELETE = 'NOTEBOOK_DELETE';
export const NOTEBOOK_DELETE_FAILED = 'NOTEBOOK_DELETE_FAILED';

export const SINGLE_NOTEBOOK = 'SINGLE_NOTEBOOK';
export const SINGLE_NOTEBOOK_SUCCESS = 'SINGLE_NOTEBOOK_SUCCESS';
export const SINGLE_NOTEBOOK_FAILED = 'SINGLE_NOTEBOOK_FAILED';

export function createNoteBooks(description, name, token) {
  return function(dispatch) {
    dispatch({ type: CREATE_NOTEBOOK });
    return notebookApis
      .createNotebook(description, name, token)
      .then(response => {
        dispatch({
          type: CREATE_NOTEBOOK_SUCCESS,
          payload: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: CREATE_NOTEBOOK_FAILED,
          payload: error,
        });
      });
  };
}

export function NotebookList(username, token) {
  return function(dispatch) {
    dispatch({ type: NOTEBOOK_LIST });
    return notebookApis
      .getNotebooks(username, token)
      .then(response => {
        dispatch({
          type: NOTEBOOK_LIST_SUCCESS,
          notebooks: response.data,
        });
      })
      .catch(error => {
        dispatch({
          type: NOTEBOOK_LIST_FAILED,
          payload: error,
        });
      });
  };
}

export function deleteNoteBook(id, token, index) {
  return function(dispatch) {
    dispatch({ type: NOTEBOOK_DELETE });
    return notebookApis
      .deleteNotebook(id, token)
      .then(response => {
        dispatch({
          type: NOTEBOOK_DELETE_SUCCESS,
          payload: response,
          meta: { index },
        });
      })
      .catch(error => {
        dispatch({
          type: NOTEBOOK_DELETE_FAILED,
          payload: error,
        });
      });
  };
}

// getNotes
export function getSingleNotebook(gistId, accessToken) {
  return function(dispatch) {
    dispatch({ type: SINGLE_NOTEBOOK });
    return notebookApis
      .getNotebookById(gistId, accessToken)
      .then(response => {
        dispatch({
          type: SINGLE_NOTEBOOK_SUCCESS,
          payload: response.data,
          meta: { id: gistId },
        });
      })
      .catch(error => {
        dispatch({
          type: SINGLE_NOTEBOOK_FAILED,
          payload: error,
        });
      });
  };
}
