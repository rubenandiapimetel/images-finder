import 	{ applyMiddleware, createStore } from 'redux';
import appReducer from '../reducers';
import thunk from 'redux-thunk'

export const store =  createStore(appReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(applyMiddleware()));



