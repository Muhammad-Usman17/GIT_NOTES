// src
import notebookApis from '../../api/notebook';

export const NOTEBOOK_LOADED = 'NOTEBOOK_LOADED';
export const NOTEBOOK_LOADING_ERROR = 'NOTEBOOK_LOADING_ERROR';

export function NoteOperation(gistId, name, filename, content, token) {
  return function(dispatch) {
    return notebookApis
      .editNotebook(gistId, name, filename, content, token)
      .then(response => {
        dispatch({
          type: NOTEBOOK_LOADED,
          payload: response.data,
          meta: { id: gistId },
        });
      })
      .catch(error => {
        dispatch({
          type: NOTEBOOK_LOADING_ERROR,
          payload: error,
        });
      });
  };
}
