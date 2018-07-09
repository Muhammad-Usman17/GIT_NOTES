import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://api.github.com/'
const CLIENT_ID = '956b89a4af0e7392a865'
const CLIENT_SECRET = 'a8a4f41239977d07809995e21adf4d2b70c4e4df'

class gistApis {

  static addGist(input) {
    let data = {
      'description': input.description,
      'public': true,
      'files': {
        [input.name]: {
          'content': "this is content "
        }
      }
    }
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }
    return axios.post(`${PROXY_URL}${BASE_URL}gists?client_id=${CLIENT_ID}&access_token=` + input.token, data, config)
      .then(response => {
        console.log(response.data)
        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static getGists(data) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://api.github.com/users/`+data.username+`/gists?client_id=${CLIENT_ID}&access_token=` + data.token, config)
      .then(response => {
       
        return  response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static deleteGist(data) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.delete(`${PROXY_URL}https://api.github.com/gists/`+data.gistid+`?client_id=${CLIENT_ID}&access_token=` + data.token, config)
      .then(response => {
        return response.data;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
 
  }

  static serachSingleGistById(gistId) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://api.github.com/gists/` + gistId, config)
      .then(response => {
       
        return  response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static editNotebook(gistId,Input) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    let data = {

      'description':"",
      "public": true,
      'files': {
        [Input.name]: {
          'content': Input.content
        }
      }
    }
    console.log(data);
    return axios.patch(`${PROXY_URL}https://api.github.com/gists/` + gistId+`?client_id=${CLIENT_ID}&access_token=` + Input.token,data, config)
      .then(response => {
       
        return  response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
 
  
  
}



export default gistApis;
