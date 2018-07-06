import * as types from './actionTypes';
import gistApis from '../../api/gistApis';

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
        type: "CREATE_GIST_SUCCESS"
      });
      return gistApis.getGists(data).then(gists => {
        dispatch({
          type: "GIST_LIST_SUCCESS",
          payload: gists
        });
        dispatch({
          type: "CREATE_GIST_OK"
        });
        }).catch(error => {
        dispatch({
          type: "GIST_LIST_FAILED",
          payload: error
        });
    })
    
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
  return gistApis.getGists(data).then(gists => {
    dispatch({
      type: "GIST_LIST_SUCCESS",
      payload: gists
    });

    }).catch(error => {
    dispatch({
      type: "GIST_LIST_FAILED",
      payload: error
    });
})
}
}



