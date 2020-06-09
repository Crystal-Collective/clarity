import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import rootReducer from 'reducers';

export default function configureStore(preloadedState) {
  const store = createStore(rootReducer, applyMiddleware(logger));
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer))
  }

  return store;
}
