import state from '../userModule/states'
import { actions } from '../userModule/actions'
import { mutations } from '../userModule/mutations'
import { getters } from "../userModule/getters"

const namespaced = true

export default {
    namespaced,
    state,
    getters,
    mutations,
    actions
}