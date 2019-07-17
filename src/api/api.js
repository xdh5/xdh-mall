import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios

axios.interceptors.response.use(res => {
    return res.data
})

const api = axios

export {
    api
};