import Api from '../services/api'

export default {
    USER_LOGIN(payload) {
        return Api().post('loginIn', payload)
    },
    USER_SIGNUP(payload) {
        return Api().post('signUp', payload)
    },
    GET_AUTH_USER() {
        return Api().get('getAuthUser')
    },
    UPDATE_PROFILE_IMAGE(file) {
        return Api().post('updateProfileImage', file)
    },
    UPDATE_COVER_IMAGE(file) {
        return Api().post('getAuthUser', file)
    },
}