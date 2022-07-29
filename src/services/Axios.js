import axios from 'axios';
// import {put} from 'redux-saga/effects';
// import {REDIRECT_TO} from './../store/actions';
import history from 'store/redirect/history';
import LocalStorageService from './LocalStorageService';
import Store from 'store/store';
import {SNACKBAR_OPEN} from 'store/actions/common/actions';

//const baseURL = process.env.API_URL;
//const baseURL = 'http://localhost:5000/';

axios.interceptors.request.use(
    (config) => {
        const token = LocalStorageService.getAccessToken();
        //  const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwZGYwMjFkZjE2YTZiN2Q5ODE2NTY5YyIsImVtYWlsIjoiYWRtaW4xQHlvcG1haWwuY29tIiwiaWF0IjoxNjQzMTkxOTkwLCJleHAiOjE2NDM0OTE5OTB9.Lz2iN1zBxREFJ59xTlO8KsYvjAnXKLpqo8hDTr0PkUQ';
        // if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
        //   config.headers["X-Matter"] = LocalStorageService.getAccessToken();
        // }
        //config.headers['Content-Type'] = config.header ? 'multipart/form-data' : 'application/json';
        config.headers['Content-Type'] = 'application/json';
        //config.headers["Accept"] = "application/json";
        // config.headers["X-Token"] = LocalStorageService.getAuth();
        // config.headers["lang"] = LocalStorageService.getLocale();
   
        // config.baseURL = baseURL;
        return config;
    },
    (error) => {
        Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    function (error) {
        //const originalRequest = error.config;
        if (!error.response) {
            Store.dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Network Error. please check your network connection',
                alertSeverity: 'error',
                variant: 'alert'
            });
            history.push('/server-error');
            return Promise.reject(error);
        }
        if (error.response.status === 403) {

            //Invalid token
            history.push('/login');

            Store.dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Invalid token',
                alertSeverity: 'error',
                variant: 'alert'
            });
            return Promise.reject(error);
        }

        if (error.response.status === 401) {

            //No token provided
            history.push('/login');

            Store.dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'No token provided',
                alertSeverity: 'error',
                variant: 'alert'
            });
            return Promise.reject(error);
        }

        if (error.response.status === 500) {

            history.push('/server-error');
            
            Store.dispatch({
                type: SNACKBAR_OPEN,
                open: true,
                message: 'Network Error. please check your network connection',
                alertSeverity: 'error',
                variant: 'alert'
            });
            return Promise.reject(error);
        }

        return Promise.reject(error.response);
    }
);

export default axios;
