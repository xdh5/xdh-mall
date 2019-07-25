import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active: sessionStorage.getItem('active') || 'active',
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username')
    },
    mutations: {
        setState(state, params) {
            state[params.key] = params.value
        }
    }
})

export default store