import Vue from 'vue';
import App from './App';
import { router } from './routers/router';
import api from './api/api'

new Vue({
    router,
    api,
    el: '#app',
    render: h => h(App)
});
