import Vue from "vue";
import Vuex from "vuex";

import animais from './modules/animais'
import donos from './modules/donos'
import funcionarios from './modules/funcionarios'
import estoque from './modules/estoque'


Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        animais,
        donos,
        funcionarios,
        estoque
    }
})

export default store