// libs
import {combineReducers} from 'redux';
import {sessionReducer } from 'redux-react-session';

// src
import notes from './notes';
import notebooks from './notebooks';

const rootReducer = combineReducers({
  notebooks,
  notes,
  session: sessionReducer
})

export default rootReducer;