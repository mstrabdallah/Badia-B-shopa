// import axios from 'axios';
// import { wrapper } from '../store/store';
// import allUrl from './allUrl.json'
// // import MsgHandleApi from '../components/tools/msg/msgHandleApi'


// const instance = axios.create({
//     baseURL: allUrl.apiUrl
// });
// instance.defaults.headers.common['Content-Type'] = 'multipart/form-data';
// // instance.defaults.headers.common[lang] = 'multipart/form-data';
// //validate response
// instance.interceptors.response.use((response) => {
//     return response;
// }, (error) => {
//     if (error.response.status === 404) {
//         console.log(getCookie('lang'))

//         wrapper.getInitialPageProps(store => async () => {
//             await store.dispatch(setMsgHandleApi(404))
//         });




//     }
//     return Promise.reject(error);
// });


// // Set the AUTH token for any request
// instance.interceptors.request.use((config) => {
//     const token = getCookie('AToken');
//     config.headers.Authorization = token ? `Bearer --- ${token}` : '';
//     return config;
// }
// )

// export default instance;





// // more functions 


// //
// function getCookie(cookieName) {
//     let cookie = {};
//     document.cookie.split(';').forEach(function (el) {
//         let [key, value] = el.split('=');
//         cookie[key.trim()] = value;
//     })
//     return cookie[cookieName];
// }
