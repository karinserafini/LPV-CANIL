import Animais from "../../../services/animais"; //chama as requisições que vem da api
import * as types from './mutation-types'


export const getAnimais = async ({ commit}) => {
    const request = await Animais.getAnimais()
    commit(types.GET_ANIMAIS, request.data.Animais)
}

export const setAnimais = async(_content, data) => {
    return Animais.setAnimais(data)
}

export const deleteAnimais = async ({commit}, data) => {
    await Animais.deleteAnimais(data)
    getAnimais({commit})
}



