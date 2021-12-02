import axios, { Axios } from "axios" 

export default class Donos {
    static getDonos = async () => {
        return await axios.get('http://localhost:3000/donos')
    }
    static setDonos = async (data) => {
        return await Axios.post('http://localhost:3000/donos', data)
    }
    static deleteDonos = async (data) => {
        return await Axios.delete(`http://localhost:3000/donos/${data.id}`)
    }
}