import axios from 'axios'
// import store from "../Store/store"

let token;
if (window.localStorage.getItem('user_token') !== null) {
    token = window.localStorage.getItem('user_token')
} else {
    token = "no token found"
}

export default () => {
    return axios.create({
        baseURL: ``,
        headers: {
            "Authorization": token,
            "Accept": "application/json",
            "Content-type": "application/json"
        }

    })
}