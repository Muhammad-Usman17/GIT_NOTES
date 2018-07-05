import * as types from '../actions/actionTypes';
import initialState from './initialState';





export default function SignInReducer(state = initialState.userdata, action) {
  switch(action.type) {

     case types.ACCESS_TOKEN_SUCCESS:
          console.log("user data: ",action.userdata)
      return action.userdata
    default: 
      return state;
  }
}