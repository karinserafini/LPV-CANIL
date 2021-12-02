import Donos from "../../../services/donos"; //chama as requisições que vem da api
import * as types from './mutation-types';

export const getDonos = async ({ commit}) => {
    const request = await Donos.getDonos()
    commit(types.GET_DONOS, request.data.Donos)
}

export const setDonos = async(_content, data) => {
    return Donos.setDonos(data)
}



export const deleteDonos= async ({commit}, data) => {
    await Donos.deleteDonos(data)
    getDonos({commit})
}
