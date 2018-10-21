import { combineReducers } from 'redux';
import messages from '../../Others/messagesReducer';
import auth from '../../Auth/authReducer';

export default combineReducers({
  messages,
  auth
});
