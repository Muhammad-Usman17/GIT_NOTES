import axios from 'axios';

const PROXY_URL = 'https://cors-anywhere.herokuapp.com/'
const BASE_URL = 'https://api.github.com/'
const CLIENT_ID = '956b89a4af0e7392a865'
const CLIENT_SECRET = 'a8a4f41239977d07809995e21adf4d2b70c4e4df'

class gistApis {

  static addGist(input) {
    let data= {
        
      'description': input.description,
      'public': true,
      'files':
      {
        [input.name]:{
          'content':"this is content "
        }

      }
      
      }
    let config = {
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      
       
      
    
  };
    return axios.post(`${PROXY_URL}${BASE_URL}gists?client_id=${CLIENT_ID}&access_token=` + input.token,data, config)
      .then(response => {
     console.log(response.data)
        return response;
      }).catch(error => {
        console.log("Error: ", error)
        return error;
      });
  }
  static updateGist(data) {
 
  }
  static deleteGist(data) {
 
  }

  static addNotes(data) {
 
  }
  static updateNotes(data) {
 
  }
  static deleteNotes(data) {
 
  }
  
  
}



export default gistApis;
