import Axios from 'axios'

const BACKEND_URL = process.env.VUE_APP_BACKEND_URL;

class BaseService {
    constructor(endpoint) {
        this.endpoint = BACKEND_URL + endpoint;
    }

    get(id, config={}) {
        if(id) {
            return Axios.get(this.endpoint + `/${id}`, config);
        }
        return Axios.get(this.endpoint, config);
    }

    update(id, payload, config={}) {
        if(id) {
            return Axios.put(this.endpoint + `/${id}`, payload, config);
        }
        return Axios.put(this.endpoint, payload, config);
    }

    create(payload, config={}) {
        return Axios.post(this.endpoint, payload, config);
    }

    delete(id, config={}) {
        return Axios.delete(this.endpoint + `/${id}`, config);
    }
}

export default BaseService;