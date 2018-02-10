import {createStore,applyMiddleware} from 'redux';
import AllReducers from './reducer';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
export default createStore(
    AllReducers,
    {},
    applyMiddleware(thunk,logger)
);