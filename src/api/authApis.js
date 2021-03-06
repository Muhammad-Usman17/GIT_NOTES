import axios from 'axios';


const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://api.github.com/'
const CLIENT_ID = '956b89a4af0e7392a865'
const CLIENT_SECRET = 'a8a4f41239977d07809995e21adf4d2b70c4e4df'

class authApis {
  static getUserAccessToken(data) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://github.com/login/oauth/access_token?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}&code=` + data, config)
      .then(response => {
        let token = response.data.substring(
          response.data.lastIndexOf("n=") + 2,
          response.data.lastIndexOf("&scope")
        );
        return token;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }

  static Login(data) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://api.github.com/user?client_id=${CLIENT_ID}&access_token=` + data, config)
      .then(response => {
        let user = response.data;
        return user;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }

  static Logout() {
    return new Promise(resolve => setTimeout(resolve, 1000));
  };

}



export default authApis;
