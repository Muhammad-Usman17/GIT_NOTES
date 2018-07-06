
import initialState from './initialState';



export default function GistReducer(state = initialState, action) {

      switch (action.type) {
        case "CREATE_GIST_SUCCESS": {
          return {...state, created: true}
        }
        case "CREATE_GIST_FAILED": {
          return {...state, created: false, error_create: action.payload}
        }
        case "CREATE_GIST_OK": {
          return {...state, created: false}
        }
        case "GIST_LIST_SUCCESS": {
          return {
            ...state,
            gists: action.payload
          }
        }
        case "GIST_LIST_FAILED": {
          return {
            ...state,
            error_list:action.payload
          }
        }
       
      }
  
      return state
  }
