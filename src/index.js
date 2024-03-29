// scroll bar
import 'simplebar/src/simplebar.css';
import './index.scss';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './main-reducer';
//
import App from './App';
import * as serviceWorker from './serviceWorker';
import reportWebVitals from './reportWebVitals';

require('dotenv').config();
// ----------------------------------------------------------------------

const store = createStore(rootReducer);
// eslint-disable-next-line no-multi-assign
if (process.env.NODE_ENV !== 'development') console.log = console.warn = console.error = () => {};

ReactDOM.render(
  <HelmetProvider>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </HelmetProvider>,
  document.getElementById('root')
);

// If you want to enable client cache, register instead.
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
