import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from'./redux/store';
import App from './App';

// import * as serviceWorkerRegistration from './serviceWorkerRegistration';
// import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
