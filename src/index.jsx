import React from 'react';
import ReactDOM from 'react-dom';
// import './styles/index.css';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, compose, applyMiddleware } from 'redux';

import App from './containers/App';
import reducer from './reducers/index';

require('babel-core/register');
require('babel-polyfill');

const createStoreWithMiddleware = compose(applyMiddleware(thunk))(createStore);

const store = createStoreWithMiddleware(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'),
);
