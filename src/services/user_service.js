import BaseService from '@/services/base_service'
import Axios from 'axios'

class UserService extends BaseService {
    constructor() {
        super('/api/user');
		}
		
		updateMe(user) {
			return Axios.put(this.endpoint + `/me`, user);
		}
}

export default new UserService();