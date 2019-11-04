import Api from '../services/api'

export default {
    GET_SEARCH(search) {
        return Api().get('search', {
            params: {
                search: search
            }
        })
    },
    // post
    GET_POST(payload) {
        return Api().get(`getPost/${payload}`)
    },
    GET_AUTH_POST() {
        return Api().get('getAuthPost')
    },
    CREATE_POST(payload) {
        return Api().post('post', payload)
    },
    GET_FOLLOWED_POST() {
        return Api().get('getFollowedPost')
    },
    GET_POST_BY_ID() {
        return APi().get('getPostById')
    },
    DELETE_POST() {
        return Api().delete(`post/${id}`)
    },

    // comment
    CREATE_COMMENT(payload) {
        return Api().post('Comment', payload)
    },
    DELETE_COMMENT() {
        return Api().delete(`Comment/${id}`)
    },

    // like
    CREATE_LIKE(payload) {
        return Api().post('like', payload)
    },
    DELETE_LIKE(likeId) {
        return Api().delete(`like/${likeId}`)
    },

    // Follow
    CREATE_FOLLOW(payload) {
        return Api().post('follow', payload)
    },
    DELETE_FOLLOW(id) {
        return Api().delete(`follow/${id}`)
    },
    // uswr

    GET_USER(payload) {
        return Api().get(`getUser/${payload}`)
    },
    GET_SUGGESTION() {
        return Api().get("suggestion")
    }
}
