import * as types from './mutation-types'

export default {
    [types.GET_DONOS] (state, payload) {
        state.donos = payload
    }
}