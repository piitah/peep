import axios from 'axios'
import store from "../Store/store"

const Api = axios.create({
    baseURL: ``,
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json"
    }
})
Api.interceptors.request.use(
    async (config) => {
        const token = store.state.userModule.token; // slightly longer running function than example above
        if (token) config.headers.Authorization = token;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default Api;