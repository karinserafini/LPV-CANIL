import * as types from './mutation-types'

export default {
    [types.GET_ESTOQUE] (state, payload) {
        state.estoque = payload
    }
}