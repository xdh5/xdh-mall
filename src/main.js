import Vue from 'vue';
import App from './App';
import { router } from './routers/router';
import { axios } from './api/index';
import store from './store/index'

Vue.prototype.$axios = axios

new Vue({
    router,
    axios,
    store,
    el: '#app',
    render: h => h(App)
});
