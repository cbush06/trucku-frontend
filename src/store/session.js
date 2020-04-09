import Axios from 'axios'
import userService from '@/services/user_service'
import csrfService from '@/services/csrf_service'

export default {
    namespaced: true,
    state: {
        currentUser: {},
        csrf: {}
    },
    mutations: {
        setUser(state, user) {
            state.currentUser = user;
        },
        setCsrf(state, csrf) {
            state.csrf = csrf;
            Axios.defaults.headers.common[csrf.header] = csrf.token;
        }
    },
    getters: {
        getCurrentUser(state) {
            return state.currentUser;
        }
    },
    actions: {
        async login({ commit }) {
            try {
                commit('setCsrf', (await csrfService.get()).data);
                commit('setUser', (await userService.get()).data);
            } catch(e) {
                console.log("error logging user in: " + e);
            }
        },
        async save({ commit }, user) {
            try {
                commit('setUser', (await userService.updateMe(user)).data);
            } catch(e) {
                console.log("error updating user: " + e);
            }
        }
    }
};