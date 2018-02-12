import { combineReducers } from 'redux';
import messages from './messages';
import auth from './auth';
import news from './news';

export default combineReducers({
  messages,
  news,
  auth
});
