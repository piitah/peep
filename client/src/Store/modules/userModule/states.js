import { parse } from "path";

export default {
    isAuthenticated: localStorage.getItem("user_token") ? true : false,
    authUser: null,
    token: localStorage.getItem("user_token") || null,
    loading: false,
    loading2: false,
    loading1: false,
    disabled: false,
    msg: "",
    search_id: JSON.parse(localStorage.getItem("id")) || ""
}