import gistApis from '../../api/gistApis';

export const NOTEBOOK_LOADED = 'NOTEBOOK_LOADED';
export const NOTEBOOK_LOADING_ERROR = 'NOTEBOOK_LOADING_ERROR';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE= 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';


export function NoteOperation(gistId,Input) {
 
    return function(dispatch) {
     
      return gistApis.editNotebook(gistId,Input).then(response => {
        dispatch({
          type:'NOTEBOOK_LOADED',
          payload: response.data
        });
        }).catch(error => {
          dispatch({
            type: 'NOTEBOOK_LOADING_ERROR',
            payload:error
          });
        });
      
    };
  }