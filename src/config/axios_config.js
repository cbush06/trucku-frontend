import Axios from 'axios'

const jsessionKey = 'JSESSIONID';

const install = function(Vue) {
    Vue.prototype.axios = Axios;
    Axios.defaults.withCredentials = true;

    if(!sessionStorage.getItem(jsessionKey)) {
        const url = new URL(window.location.href);
        sessionStorage.setItem(jsessionKey, url.searchParams.get(jsessionKey));
    }

    Axios.defaults.headers.common[jsessionKey] = sessionStorage.getItem(jsessionKey);
};

export default { install };