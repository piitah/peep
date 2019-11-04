import state from '../profileModule/states'
import { actions } from '../profileModule/actions'
import { mutations } from '../profileModule/mutations'
import { getters } from "../profileModule/getters"

const namespaced = true;

export default {
    namespaced,
    state,
    getters,
    actions,
    mutations
}