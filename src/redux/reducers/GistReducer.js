import * as types from '../actions/actionTypes';
import initialState from './initialState';



export default function GistReducer(state = initialState.notebooks, action) {
  switch(action.type) {

     case types.GET_ALL_GIST:
          console.log("User Details: ",action.notebooks)
      return action.gists
    default: 
      return state;
  }
}