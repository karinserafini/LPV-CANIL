const db = require ('../configs/pg')

const sql_get =
    `select idproduto,
    descricao, 
    quantidade, 
    tipoanimal, 
    valorunit,
    valortotal
    from estoque`

const getEstoque = async() => {
    let estoque = {}
    await db.query(sql_get)
        .then(ret => estoque = {total: ret.rows.length, estoque: ret.rows})
        .catch(err => estoque = err.stack)
        return estoque
}

const sql_insert =
    `insert into estoque(idproduto, descricao, quantidade, tipoanimal, valorunit, valortotal)
                    values ($1, $2, $3, $4, $5)`

const postEstoque = async(params) => {
    const {idproduto, descricao, quantidade, tipoanimal, valorunit, valortotal} = params
    await db.query(sql_insert, [idproduto, descricao, quantidade, tipoanimal, valorunit, valortotal])
}

const sql_delete =
    `delete from estoque 
        where idproduto = $1`
    
    const deleteEstoque = async(params) => {
    const {id} = params
    await db.query(sql_delete [id])
}

const sql_patch =
    `update estoque
    set `

const patchEstoque = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.descricao) {
        countParams ++
        fields += ` descricao = $${countParams}`
        binds.push(params.descricao)
    }
    if(params.quantidade){
        countParams++
        fields += (fields?',' :'') + ` quantidade = $${countParams}`
        binds.push(params.quantidade)
    }
    if (params.tipoanimal){
        countParams ++
        fields += (fields?',' : '') + ` tipoanimal = $${countParams}`
        binds.push(params.tipoanimal)
    }
    if(params.valorunit){
        countParams ++
        fields += (fields?',' : '') + ` valorunit = $${countParams}`
        binds.push(params.valorunit)
    }
    if(params.valortotal){
        countParams ++
        fields += (fields? ',': '') + ` valor total = $${countParams}`
    }
    let sql = sql_patch + fields + 'where idproduto = $1 '
    return await db.query(sql, binds)

}

module.exports.getEstoque = getEstoque
module.exports.postEstoque = postEstoque
module.exports.deleteEstoque = deleteEstoque
module.exports.patchEstoque = patchEstoque