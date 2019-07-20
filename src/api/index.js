import Vue from 'vue';
import axios from 'axios';

Vue.prototype.$axios = axios

axios.defaults.headers = {
    "X-LC-Id": "bIbSPV8ltG9IPrIfzoAx4XQH-gzGzoHsz",
    "X-LC-Key": "II0ANcGFRzA9QfwEzrIeuG5j",
    "Content-Type": "application/json"
}

axios.defaults.baseURL = 'https://leancloud.cn:443/1.1/'

axios.interceptors.response.use(res => {
    return res.data
})

export {
    axios
};