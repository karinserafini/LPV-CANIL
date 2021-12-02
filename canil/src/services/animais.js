import axios, { Axios } from "axios" 

export default class Animais {
    static getAnimais = async () => {
        return await axios.get('http://localhost:3000/animal')
    }
    static setAnimais = async (data) => {
        return await Axios.post('http://localhost:3000/animal', data)
    }
    static deleteAnimais = async (data) => {
        return await Axios.delete(`http://localhost:3000/animais/${data.id}`)
    }
}



