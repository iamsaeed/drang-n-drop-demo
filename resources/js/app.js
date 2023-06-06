import _ from 'lodash';
window._ = _;
import axios from 'axios';
import '../css/app.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import router from './router'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// axios setup
import { useAuthStore } from "./stores/authStore";
import { useErrorStore } from "./stores/errorsStore";
import { useNotificationStore } from "./stores/notificationStore";
import { useLoaderStore } from "./stores/loaderStore";

const auth = useAuthStore();
const errors = useErrorStore()
const notify = useNotificationStore()
const loader = useLoaderStore()

app.config.globalProperties.$auth = auth.auth
app.config.globalProperties.$permissions = auth.permissions
app.config.globalProperties.$public_path = '/storage/'

const instance = axios.create({
    baseURL: '/',
    headers : {
        'Accept' : 'application/json',
        'Authorization' : 'Bearer '+ auth.token
    }
})
window.axios = instance
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    !loader.loader ? loader.setLoader(true) : ''
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
window.axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    loader.loader ? loader.setLoader(false) : ''

    if(response.data.message){
        notify.setMessage(response.data.message)
    }
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    loader.loader ? loader.setLoader(false) : ''

    // if token has expired
    if(error.response.data.message === 'Unauthenticated.'){
        auth.logoutWithoutTokenResetInServer();
    }

    // Do something with request error
    if(error.response && error.response.data && error.response.data.errors){
        errors.set(error.response.data.errors)
    }
    if(error.response.data.message){
        notify.setMessage(error.response.data.message)
    }
    return Promise.reject(error);
});
