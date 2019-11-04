import * as types from '../types'

export const mutations = {
    [types.USER_LOGIN_SUCCESS]: (state, payload) => {
        if (window.localStorage.getItem("user_token")) {
            state.token = window.localStorage.getItem("user_token")
            state.isAuthenticated = true;
            state.user = payload;
        }

        state.msg = ''
        state.loading = false;
        state.disabled = false
    },

    [types.USER_LOGOUT_SUCCESS]: (state) => {
        window.localStorage.removeItem("user_token")
        state.isAuthenticated = false;
        state.user = null;
        state.token = null

    },
    [types.USER_LOGIN_FAILED]: (state, payload) => {
        state.msg = payload;
        state.loading = false;
        state.disabled = false
    },
    [types.USER_SIGNUP_SUCCESS]: (state, payload) => {
        state.loading = false;
        state.disabled = false
    },
    [types.USER_SIGNUP_FAILED]: (state, payload) => {
        state.msg = payload;
        state.loading = false;
        state.disabled = false
    },
    [types.SET_LOADING]: (state) => {
        state.loading = true;
        state.disabled = true;
    },
    [types.CANCEL_ALL_MESSAGES]: (state) => {
        state.msg = ""
    },
    [types.TRY_AUTO_LOGIN_SUCCESS]: (state, payload) => {
        state.token = payload.token
        state.isAuthenticated = true;
        state.user = payload.user;
    },
}
