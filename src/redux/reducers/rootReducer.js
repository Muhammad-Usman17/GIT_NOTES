// libs
import {combineReducers} from 'redux';
import { sessionService, sessionReducer } from 'redux-react-session';

// src
import search from './SearchReducer';
import gists from './GistReducer';
import notes from './notes'


const rootReducer = combineReducers({
  // short hand property names
  search,
  notes,
  gists,
  session: sessionReducer
})

export default rootReducer;