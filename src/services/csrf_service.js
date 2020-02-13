import BaseService from '@/services/base_service'

class CsrfService extends BaseService {
    constructor() {
        super('/api/csrf');
    }
}

export default new CsrfService();