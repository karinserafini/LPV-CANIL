import Funcionarios from "../../../services/funcionarios"; //chama as requisições que vem da api
import * as types from './mutation-types';


export const getFuncionarios = async ({ commit}) => {
    const request = await Funcionarios.getFuncionarios()
    commit(types.GET_FUNCIONARIOS, request.data.Funcionarios)
}

export const setFuncionarios = async(_content, data) => {
    return Funcionarios.setFuncionarios(data)
}


export const deleteFuncionarios = async ({commit}, data) => {
    await Funcionarios.deleteFuncionarios(data)
    getFuncionarios({commit})
}