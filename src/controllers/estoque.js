const estoque = require ('../routes/estoque');
let estoqueService = require('../services/estoque')

const getEstoque = async (req, res, next) => {
    try {
        await estoqueService.getEstoque()
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch (err) {
        next (err);
    }
}

const postEstoque = async (req, res, next) => {
    try {
        await estoqueService.postEstoque(req.body)
        .then(ret => res.status(201).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err) {
        next (err);
    }
}

const deleteEstoque = async (req, res, next) => {
    try {
        await estoqueService.deleteEstoque(req.params)
        .then(ret => res.status(204).send(ret))
        .catch(err => res.status(500).send(err))
    } catch(err){
        next(err);
    }
}

const patchEstoque = async (req, res, next) => {
    try {
        let params = req.body
        params.id = req.params.id
        await estoqueService.patchEstoque(params)
        .then(ret => res.status(200).send(ret))
        .catch(err => res.status(500).send(err))
    }catch(err){
        next(err);
    }
}

module.exports.getEstoque = getEstoque
module.exports.postEstoque = postEstoque
module.exports.deleteEstoque = deleteEstoque
module.exports.patchEstoque = patchEstoque

