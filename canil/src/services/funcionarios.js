import axios, { Axios } from "axios" 

export default class Funcionarios {
    static getFuncionarios = async () => {
        return await axios.get('http://localhost:3000/funcionarios')
    }
    static setFuncionarios = async (data) => {
        return await Axios.post('http://localhost:3000/funcionarios', data)
    }
    static deleteFuncionarios = async (data) => {
        return await Axios.delete(`http://localhost:3000/funcionarios/${data.id}`)
    }
}