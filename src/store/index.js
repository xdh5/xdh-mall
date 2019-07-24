import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active: 'index',
        token: localStorage.getItem('token'),
        username: localStorage.getItem('username')
    },
    mutations: {
        changeTab(state, index) {
            state.active = index
        },
        setToken(state, index) {
            state.token = index
        }
    }
})

export default store