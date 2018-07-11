import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
const BASE_URL = 'https://api.github.com/';
const CLIENT_ID = '956b89a4af0e7392a865';

class notebookApis {
  static createNotebook(description, name, token) {
    const data = {
      description,
      public: true,
      files: {
        [name]: {
          content: 'this is content ',
        },
      },
    };
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    return axios
      .post(
        `${PROXY_URL}${BASE_URL}gists?client_id=${CLIENT_ID}&access_token=${token}`,
        data,
        config
      )
      .then(response => response)
      .catch(error => {
        console.log('Error: ', error);
        return error;
      });
  }
  static getNotebooks(username, token) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    return axios
      .get(
        `${PROXY_URL}https://api.github.com/users/${username}/gists?client_id=${CLIENT_ID}&access_token=${token}`,
        config
      )
      .then(response => response)
      .catch(error => {
        console.log('Error: ', error);
        return error;
      });
  }
  static deleteNotebook(id, token) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    return axios
      .delete(
        `${PROXY_URL}https://api.github.com/gists/${id}?client_id=${CLIENT_ID}&access_token=${token}`,
        config
      )
      .then(response => response.data)
      .catch(error => {
        console.log('Error: ', error);
        return error;
      });
  }

  static getNotebookById(gistId, accessToken) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    const URL1 = `${PROXY_URL}https://api.github.com/gists/${gistId}?client_id=${CLIENT_ID}&access_token=${accessToken}`;
    const URL2 = `${PROXY_URL}https://api.github.com/gists/${gistId}`;
    const URL = accessToken == '' ? URL2 : URL1;
    return axios.get(URL, config).then(response => response).catch(error => {
      console.log('Error: ', error);
      return error;
    });
  }
  static editNotebook(gistId, name, filename, content, token) {
    const config = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    };
    const data = {
      public: true,
      files: {
        [name]: {
          filename: filename == undefined ? name : filename,
          content,
        },
      },
    };
    console.log(data);
    return axios
      .patch(
        `${PROXY_URL}https://api.github.com/gists/${gistId}?client_id=${CLIENT_ID}&access_token=${token}`,
        data,
        config
      )
      .then(response => response)
      .catch(error => {
        console.log('Error: ', error);
        return error;
      });
  }
}

export default notebookApis;
