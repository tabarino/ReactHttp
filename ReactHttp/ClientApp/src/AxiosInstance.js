import axios from 'axios';

const AxiosInstance = axios.create({
  // baseURL: 'https://localhost:5001'
});

AxiosInstance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';
AxiosInstance.defaults.headers.post['Content-Type'] = 'application/json';

// // Interceptor for Request
// var interceptorRequest = axios.interceptors.request.use(request => {
//   console.log(request);
//   // Add/Edit what is needed in the Request
//   return request;
// }, error => {
//   console.error(error);
//   return Promise.reject(error);
// });

// // You can remove a Interceptor using the Eject
// axios.interceptors.request.eject(interceptorRequest);

// // Interceptor for Response
// var interceptorResponse = axios.interceptors.response.use(response => {
//   console.log(response);
//   // Add/Edit what is needed in the Response
//   return response;
// }, error => {
//   console.error(error);
//   return Promise.reject(error);
// });

// // You can remove a Interceptor using the Eject
// axios.interceptors.response.eject(interceptorResponse);

export default AxiosInstance;
