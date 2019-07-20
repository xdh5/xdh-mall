import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        active: 'index'
    },
    mutations: {
        changeTab(state, index) {
            state.active = index
        }
    }
})

export default store