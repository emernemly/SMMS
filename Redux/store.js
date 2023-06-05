import RootReducer from './Reducer';
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const initailstate = {};
const store = createStore(
  RootReducer,
  initailstate,
  composeWithDevTools(applyMiddleware(thunk))
);
export default store;
