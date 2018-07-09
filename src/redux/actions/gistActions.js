
// src
import gistApis from '../../api/gistApis';

export const CREATE_GIST_SUCCESS = 'CREATE_GIST_SUCCESS'
export const CREATE_GIST_OK = 'CREATE_GIST_OK'

export function gistOk() {
  return function(dispatch) {
    dispatch({
      type: "CREATE_GIST_OK"
    });
  }
}


export function createGist(data) {
 
  return function(dispatch) {
   
    return gistApis.addGist(data).then(response => {
      dispatch({
        type: "CREATE_GIST_SUCCESS",
        payload: response.data
      });
      }).catch(error => {
        dispatch({
          type: "CREATE_GIST_FAILED",
          payload:error
        });
      });
    
  };
}

export function gistList(data) {
  return function(dispatch) {
  return gistApis.getGists(data).then(response => {
    dispatch({
      type: "GIST_LIST_SUCCESS",
      notebooks: response.data
    });
    }).catch(error => {
    dispatch({
      type: "GIST_LIST_FAILED",
      payload: error
    });
})
}
}

export function deleteGist(data) {
  return function(dispatch) {
  return gistApis.deleteGist(data).then(response => {
    dispatch({
      type: "GIST_DELETE_SUCCESS",
      payload: response,
      meta: { index: data.index }
    });
      dispatch({
        type: "GIST_DELETE_OK"
      });
  
     

    }).catch(error => {
    dispatch({
      type: "GIST_DELETE_FAILED",
      payload: error
    });
})
}
}


// getNotes
export function getSingleGist(gistId) {
  return function(dispatch) {
  return gistApis.serachSingleGistById(gistId).then(response => {
    dispatch({
      type: "SINGLE_GIST_SUCCESS",
      payload: response.data,
      meta: { id: gistId }
    });

    }).catch(error => {
    dispatch({
      type: "SINGLE_GIST_FAILED",
      payload: error
    });
})
}
}
