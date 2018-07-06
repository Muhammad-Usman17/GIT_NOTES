import * as types from '../actions/actionTypes';
import initialState from './initialState';





export default function SignInReducer(state = initialState.notebook, action) {
  switch(action.type) {

     case types.ACCESS_TOKEN_SUCCESS:
          console.log("user data: ",action.notebook)
      return action.userdata
    default: 
      return state;
  }
}