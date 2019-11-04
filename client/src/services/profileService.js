import Api from '../services/api'

export default {
    CREATE_PROFILE(payload) {
        return Api().post('Profile', payload)
    },
    GET_USER_PROFILES() {
        return Api().get('Profile')
    },
    UPDATE_PROFILE(payload) {
        return Api().post('updateProfile', payload)
    },
    CREATE_EDUCATION(payload) {
        return Api().post('education', payload)
    },
    CREATE_EXPERIENCE(payload) {
        return Api().post(`experience`, payload)
    }
}