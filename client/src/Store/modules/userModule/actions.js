import userService from '../../../services/userService'
import * as types from '../types'
import router from "../../../router"

export const actions = {
    async [types.USER_LOGIN](context, payload) {
        await userService.USER_LOGIN(payload)
            .then(response => {
                localStorage.setItem("user_token", response.data.token)
                const decode = JSON.parse(atob(response.data.token.split('.')[1]))
                context.commit(types.USER_LOGIN_SUCCESS, {
                    decode: decode,
                    token: response.data.token
                })
                router.push({ path: '/Dashboard' })
            })
            .catch(error => {
                console.log(error.response.data.error)
                context.commit(types.USER_LOGIN_FAILED, error.response.data.error)
            })
    },
    async [types.USER_SIGNUP](context, payload) {
        await userService.USER_SIGNUP(payload)
            .then(response => {
                context.commit(types.USER_SIGNUP_SUCCESS, response.data)
                router.push({ path: '/login' })
            })
            .catch(error => {
                context.commit(types.USER_SIGNUP_FAILED, error.response.data.message)
            })
    },
    async [types.TRY_AUTO_LOGIN](context, payload) {
        const token = window.localStorage.getItem("user_token")
        if (!token) {
            return router.push({ path: "/" })
        }

        if (token) {
            const token = localStorage.getItem("user_token")
            const decode = JSON.parse(atob(token.split('.')[1]));
            const response = await userService.GET_AUTH_USER();
            context.commit(types.TRY_AUTO_LOGIN_SUCCESS, {
                token: token,
                user: response.data
            })
            // router.push({ path: '/Dashboard' })
        }
    },
    [types.USER_LOGOUT](context) {
        context.commit(types.USER_LOGOUT_SUCCESS)
        router.push({ path: '/' })
    }
}