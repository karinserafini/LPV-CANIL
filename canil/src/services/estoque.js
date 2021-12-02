import axios, { Axios } from "axios" 

export default class Estoque {
    static getEstoque = async () => {
        return await axios.get('http://localhost:3000/estoqueprodutos')
    }
    static setEstoque = async (data) => {
        return await Axios.post('http://localhost:3000/estoqueprodutos', data)
    }
    static deleteEstoque = async (data) => {
        return await Axios.delete(`http://localhost:3000/estoqueprodutos/${data.id}`)
    }
}