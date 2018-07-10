import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://api.github.com/'
const CLIENT_ID = '956b89a4af0e7392a865'

class notebookApis {

  static createNotebook(description,name,token) {
    let data = {
      'description': description,
      'public': true,
      'files': {
        [name]: {
          'content': "this is content "
        }
      }
    }
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
    }
    return axios.post(`${PROXY_URL}${BASE_URL}gists?client_id=${CLIENT_ID}&access_token=` + token, data, config)
      .then(response => {
        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static getNotebooks(username,token) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://api.github.com/users/` + username + `/gists?client_id=${CLIENT_ID}&access_token=` + token, config)
      .then(response => {
        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static deleteNotebook(id,token) {
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.delete(`${PROXY_URL}https://api.github.com/gists/` + id + `?client_id=${CLIENT_ID}&access_token=` + token, config)
      .then(response => {
        return response.data;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });

  }

  static getNotebookById(gistId, accessToken) {

    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    return axios.get(`${PROXY_URL}https://api.github.com/gists/` + gistId + `?client_id=${CLIENT_ID}&access_token=` + accessToken, config)
      .then(response => {

        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static editNotebook(gistId, name,filename,content,token) {
  
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    };
    let data = {

      'description': "",
      "public": true,
      'files': {
        [name]: {
          'filename': filename == undefined ? name : filename,
          'content': content
        }
      }
    }
    console.log(data);
    return axios.patch(`${PROXY_URL}https://api.github.com/gists/` + gistId + `?client_id=${CLIENT_ID}&access_token=` + token, data, config)
      .then(response => {
        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }



}



export default notebookApis;
