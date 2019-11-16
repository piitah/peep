import * as types from '../types'
import { stringify } from 'querystring';

export const mutations = {
    [types.USER_LOGIN_SUCCESS]: (state, payload) => {
        if (localStorage.getItem("user_token")) {
            state.token = payload.token
            state.isAuthenticated = true;
            state.authUser = payload.decode;
        }
        state.msg = ''
        state.loading = false;
        state.disabled = false
    },

    [types.USER_LOGOUT_SUCCESS]: (state) => {
        window.localStorage.removeItem("user_token")
        window.localStorage.removeItem("authUser")
        state.isAuthenticated = false;
        state.authUser = null;
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
    [types.PROFILE_LOADING]: (state) => {
        state.loading2 = true;
    },
    [types.COVER_LOADING]: (state) => {
        state.loading1 = true;
    },
    [types.UPDATE_PROFILE_IMAGE]: (state, payload) => {
        state.authUser.image = payload
        state.loading2 = false;
    },
    [types.UPDATE_COVER_IMAGE]: (state, payload) => {
        state.authUser.coverImage = payload
        state.loading1 = false;
    },
    [types.SEARCH_ID]: (state, payload) => {
        localStorage.setItem("id", JSON.stringify({
            id: payload
        }))
        state.search_id = payload
    },
    [types.CANCEL_ALL_MESSAGES]: (state) => {
        state.msg = ""
    },
    [types.TRY_AUTO_LOGIN_SUCCESS]: (state, payload) => {
        state.token = payload.token
        state.isAuthenticated = true;
        state.authUser = payload.user;
        state.loading1 = false;
        state.loading2 = false;
    },
}
