import axios from 'axios';
import store from '../store/index';

axios.defaults.headers = {
    "X-LC-Id": "bIbSPV8ltG9IPrIfzoAx4XQH-gzGzoHsz",
    "X-LC-Key": "II0ANcGFRzA9QfwEzrIeuG5j",
    "X-LC-IM-Session-Token": store.state.token,
    "Content-Type": "application/json",
}

axios.defaults.timeout = 2500,

axios.defaults.baseURL = 'https://leancloud.cn:443/1.1/'

axios.interceptors.response.use(
    (res) => {
        return res.data
    },
    (err) => {
        return Promise.reject(err.response.data)
    }
)

export {
    axios
};