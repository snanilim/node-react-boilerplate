import { combineReducers } from 'redux';
import messages from './messages';
import news from './news';

export default combineReducers({
  messages,
  news
});
