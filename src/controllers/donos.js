const dono = require ('../routes/donos');
let donoService = require('../services/donos')

const getDono = async (req, res, next) => {
    try {
        await donoService.getDono()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next (err);
    }
}

const postDono = async (req, res, next) => {
    try {
        await donoService.postDono(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next (err);
    }
}

const deleteDono = async (req, res, next) => {
    try {
        await donoService.deleteDono(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err){
        next(err);
    }
}

const patchDono = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await donoService.patchDono(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err);
    }
}

module.exports.getDono = getDono
module.exports.postDono = postDono
module.exports.deleteDono = deleteDono
module.exports.patchDono = patchDono