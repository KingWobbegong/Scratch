import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Router, Route, indexRoute, __HistoryContext, Link } from 'react-router';
import App from './App.js';
import indexReducer from '../client/reducers/indexReducer';

import styles from './scss/index.scss';
//import some styles at some point when you wanna look pretty

const initalState = window.__REDUX_STATE__;
const store = createStore(indexReducer, initalState);

ReactDOM.render(
  <Provider store={store}>
    <Router history={__HistoryContext} routes={routes} />

    {/* <App /> */}
  </Provider>,

  document.getElementById('root')
);
