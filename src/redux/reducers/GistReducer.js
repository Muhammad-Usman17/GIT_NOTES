import * as types from '../actions/actionTypes';
import initialState from './initialState';



export default function GistReducer(state = initialState.gists, action) {
  switch(action.type) {

     case types.GET_ALL_GIST:
          console.log("User Details: ",action.gists)
      return action.gists
    default: 
      return state;
  }
}