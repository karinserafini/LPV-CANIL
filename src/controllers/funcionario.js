const funcionario = require('../routes/funcionario');
let funcionarioService = require('../services/funcionario')

const getFuncionarios = async (req, res, next) => {
    try {
        await funcionarioService.getFuncionarios()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next(err);
    }
}

const postFuncionarios = async (req, res, next) => {
    try {
        await funcionarioService.postFuncionarios(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next(err);
    }
}


const deleteFuncionarios = async (req, res, next) => {
    try{
        await funcionarioService.deleteFuncionarios(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err){
        next(err);
    }
}

const patchFuncionarios = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await funcionarioService.patchFuncionarios(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err);
    }
}

module.exports.postFuncionarios = postFuncionarios 
module.exports.getFuncionarios = getFuncionarios 
module.exports.deleteFuncionarios = deleteFuncionarios
module.exports.patchFuncionarios = patchFuncionarios