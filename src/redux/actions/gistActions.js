import * as types from './actionTypes';
import gistApis from '../../api/gistApis';

export function AccessTokenSuccess(userdata) {
  return {type: types.ACCESS_TOKEN_SUCCESS, userdata};
}

// export const login = (data) => {
//   return () => {
//     return sessionApi.login(user).then(response => {
//       const { token } = response;
//       sessionService.saveSession({ token })
//       .then(() => {
//         sessionService.saveUser(response.data)
//         .then(() => {
//           browserHistory.replace('/');
//         });
//       });
//     });
//   };
// };

export function createGist(data) {
 
  return function(dispatch) {
    return gistApis.addGist(data).then(response => {
     
    console.log('reponse', response)
      }).catch(error => {
        throw(error);
      });
    
  };
}

