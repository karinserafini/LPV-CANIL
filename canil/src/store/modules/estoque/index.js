import * as actions from './actions'
import * as getters from './getter'
import mutation from './mutation'
import state from './state'


export default {
    namespaced: true,
    getters,
    state,
    actions,
    mutation
}