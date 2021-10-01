const estoque = require('./estoque');
const animais = require('./animal');
const donos = require('./donos');
const funcionario = require('./funcionario');

module.exports = (app) => {
    animais(app)
    funcionario(app)
    donos(app)
    estoque(app)
}