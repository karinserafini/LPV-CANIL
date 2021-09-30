const animal = require ('../routes/animal');
let animalService = require('../services/animal')

const getAnimais = async (req, res, next) => {
    try {
        await animalService.getAnimais()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next (err);
    }
}

const postAnimais = async (req, res, next) => {
    try {
        await animalService.postAnimais(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next (err);
    }
}

const deleteAnimais = async (req, res, next) => {
    try {
        await animalService.deleteAnimais(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err){
        next(err);
    }
}

const patchAnimais = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await animalService.patchAnimais(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err);
    }
}

module.exports.postAnimais = postAnimais
module.exports.getAnimais = getAnimais
module.exports.deleteAnimais = deleteAnimais
module.exports.patchAnimais = patchAnimais