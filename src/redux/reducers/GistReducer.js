
import * as ActionTypes from '../actions'




export default function GistReducer(state = {}, action) {
  const { notebooks, meta  } = action
  console.log('reducer',state);
      switch (action.type) {
        
        case "CREATE_GIST_SUCCESS": {
          console.log('state',state);
          const {notebooks}=state;
          const newArray=[...notebooks,action.payload]
        
          return {...state, created: false, notebooks:newArray}
        }





        case "GIST_DELETE_SUCCESS": {
          const { index } = meta
          const {notebooks}=state;
          console.log(notebooks);
          
          const newArray = notebooks.filter(a => notebooks.indexOf(a) !== index);
          
          console.log(newArray);

          return {...state, deleted:true,notebooks:newArray}
        }
        case "GIST_LIST_SUCCESS": {
          return { ...state,notebooks}
        }
        case "GIST_LIST_FAILED": {
          return {...state, error_list:action.payload}
        }
     
        case "GIST_DELETE_FAILED": {
          return {...state,error_list:action.payload,deleted:false }
        }
        case "GIST_DELETE_OK": {
          return {...state,deleted:false }
        }
        case "CREATE_GIST_FAILED": {
        
          return {...state, created: false}
        }
        case "CREATE_GIST_OK": {
          return {...state, created: false}
        }
       
      }
  
      return state
  }
