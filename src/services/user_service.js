import BaseService from '@/services/base_service'

class UserService extends BaseService {
    constructor() {
        super('/api/user');
    }
}

export default new UserService();