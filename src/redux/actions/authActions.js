import history from '../../utils/history';
import { sessionService } from 'redux-react-session';
import authApis from '../../api/authApis';


export function login(data) {

 

  return function(dispatch) {

    return authApis.getUserAccessToken(data).then(token => {
      return authApis.Login(token).then(user => {
        let userdata = {
          Accesstoken:{ tok:token},
          data: {
            email: user.email,
            name: user.name,
            username:user.login,
            photo: user.avatar_url
          }}
          sessionService.saveSession( userdata.Accesstoken )
          .then(() => {
            sessionService.saveUser(userdata.data)
            
          });
      }).catch(error => {
        throw(error);
      });
    }).catch(error => {
      history.replace('/');
      throw(error);
    });
  };
}

export const logout = () => {
  return () => {
    return authApis.Logout().then(() => {
      sessionService.deleteSession().then(()=>sessionService.deleteUser().then(()=> history.replace('/signIn')))

      console.log("logout is called");
    }).catch(err => {
    
      console.log("error am called");

    });
  };
};