import '@/assets/css/main.scss'

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { CardPlugin, NavbarPlugin } from 'bootstrap-vue'
import AxiosConfig from '@/config/axios_config'

Vue.use(CardPlugin);
Vue.use(NavbarPlugin);
Vue.use(AxiosConfig);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
