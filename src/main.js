import '@/assets/css/main.scss'

import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import bootstrap from 'bootstrap-vue'
import AxiosConfig from '@/config/axios_config'
import { Loader } from '@googlemaps/loader'

Vue.use(bootstrap);
Vue.use(AxiosConfig);

Vue.config.productionTip = false

const mapsApiKey = process.env.VUE_APP_MAPS_API_KEY;

(async function(){
    new Vue({
        router,
        store,
        render: h => h(App)
    }).$mount('#app');

    await (new Loader({
        version: 'weekly',
        apiKey: mapsApiKey,
        libraries: [ 'places', 'directions' ]
    })).load();
})();