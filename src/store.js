import Vue from 'vue'
import Vuex from 'vuex'
import SessionStore from '@/store/session'
import ConstantsStore from '@/store/constants'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        buildVersion: process.env.VUE_APP_VERSION,
        buildDate: process.env.VUE_APP_BUILDDATE,
        publicPath: process.env.VUE_APP_PUBLIC_PATH,
        backendPath: process.env.VUE_APP_BACKEND_URL
    },
    modules: {
        session: SessionStore,
        constants: ConstantsStore
    }
})
