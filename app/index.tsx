import 'bootstrap/dist/css/bootstrap.min.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, compose, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';

import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';

const store = createStore(
  reducers,
  compose(
    composeWithDevTools(applyMiddleware(reduxThunk)),
  ),
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
