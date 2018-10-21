import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import promise from 'redux-promise';
import { createLogger } from 'redux-logger';
import rootReducer from "../reducer/";

export default function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, promise, logger)
    
  );

  return store;
}