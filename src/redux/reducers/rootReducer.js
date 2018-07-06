import {combineReducers} from 'redux';

import gists from './GistReducer';
import { sessionService, sessionReducer } from 'redux-react-session';




const rootReducer = combineReducers({
  // short hand property names
  gists, session: sessionReducer
})

export default rootReducer;