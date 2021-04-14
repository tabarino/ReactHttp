import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Interceptor for Request
axios.interceptors.request.use(request => {
  console.log(request);
  // Add/Edit what is needed in the Request
  return request;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

// Interceptor for Response
axios.interceptors.response.use(response => {
  console.log(response);
  // Add/Edit what is needed in the Response
  return response;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
