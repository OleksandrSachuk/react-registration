import {
  applyMiddleware,
  combineReducers,
  createStore,
} from 'redux';
// import { createEpicMiddleware } from 'redux-observable';
import { composeWithDevTools } from 'redux-devtools-extension';

import user from '../modules/registartion/reducers';

const rootReducer = combineReducers({
  user,
});

export default function configureStore(preloadedState) {

  // const epicMiddleware = createEpicMiddleware();
  // const middlewares = [epicMiddleware];
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  // epicMiddleware.run(rootEpic);

  return store;
}