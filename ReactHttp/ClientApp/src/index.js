import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

// Set Base URL
// axios.defaults.baseURL = 'https://localhost:5001';
// axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers.post['Content-Type'] = 'application/json';

// Interceptor for Request
var interceptorRequest = axios.interceptors.request.use(request => {
  console.log(request);
  // Add/Edit what is needed in the Request
  return request;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

// You can remove a Interceptor using the Eject
axios.interceptors.request.eject(interceptorRequest);

// Interceptor for Response
var interceptorResponse = axios.interceptors.response.use(response => {
  console.log(response);
  // Add/Edit what is needed in the Response
  return response;
}, error => {
  console.error(error);
  return Promise.reject(error);
});

// You can remove a Interceptor using the Eject
axios.interceptors.response.eject(interceptorResponse);

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
