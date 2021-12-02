import * as types from './mutation-types'

export default {
    [types.GET_ANIMAIS] (state, payload) {
        state.animais = payload
    }
}

