import {combineReducers} from 'redux';
import userdata from './SignInReducer';
import gists from './GistReducer';
import { sessionService, sessionReducer } from 'redux-react-session';




const rootReducer = combineReducers({
  // short hand property names
  userdata,gists, session: sessionReducer
})

export default rootReducer;