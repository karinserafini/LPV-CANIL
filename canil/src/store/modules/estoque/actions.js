import Estoque from "../../../services/estoque"; //chama as requisições que vem da api
import * as types from './mutation-types';


export const getEstoque = async ({ commit}) => {
    const request = await Estoque.getEstoque()
    commit(types.GET_ESTOQUE, request.data.Estoque)
}

export const setEstoque = async(_content, data) => {
    return Estoque.setEstoque(data)
}


export const deleteEstoque = async ({commit}, data) => {
    await Estoque.deleteEstoque(data)
    getEstoque({commit})
}