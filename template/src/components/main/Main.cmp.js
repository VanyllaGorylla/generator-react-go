import React from 'react';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import thunkMiddleware from 'redux-thunk';
import { BrowserRouter as Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'react-materialize';

import Navigation from './Navigation.cmp';
import DeclaredRoutes from './DeclaredRoutes.cmp';

import combinedReducers from './combinedReducers';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancers = composeEnhancers(
  applyMiddleware(thunkMiddleware, promiseMiddleware())
);

let store = createStore(combinedReducers, enhancers);

const MainCmp = () => (
  <Provider store={store}>
    <div>
      <ToastContainer />
      <Router>
        <div>
          <Navigation />
          <Container>
            <DeclaredRoutes />
          </Container>
        </div>
      </Router>
    </div>
  </Provider>
);

export { MainCmp };
export default MainCmp;
