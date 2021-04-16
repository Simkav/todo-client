import { createStore, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
import reducer from '../reducer/index';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools());

export default store;
