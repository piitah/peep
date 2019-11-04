export default {
    isAuthenticated: false,
    user: null,
    token: window.localStorage.getItem("user_token") || null,
    loading: false,
    disabled: false,
    msg: ""
}