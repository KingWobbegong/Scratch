import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.js';
import store from './store';
import styles from './scss/index.scss';
//import some styles at some point when you wanna look pretty

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
