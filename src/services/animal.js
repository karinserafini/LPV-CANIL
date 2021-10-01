const db = require ('../configs/pg')

const sql_get =
    `select idanimal, 
    nome, 
    sexo, 
    raca, 
    tipo, 
    porte, 
    dataentrada
    from animais`

const getAnimais = async() => {
    let animal = {}
    await db.query(sql_get)
        .then(ret => animal = {total: ret.rows.length, animal: ret.rows})
        .catch(err => animal = err.stack)
        return animal
}

const sql_insert = 
    `insert into animais (idanimal, nome, sexo, raca, tipo, porte, dataentrada )
                    values ($1, $2, $3, $4, $5, $6, $7)`

const postAnimais = async (params) => {
    const {idanimal, nome, sexo, raca, tipo, porte, dataentrada } = params
    await db.query(sql_insert, [idanimal, nome, sexo, raca, tipo, porte, dataentrada ])
}

const sql_delete =
    `delete from animais 
        where idanimal = $1`
    
const deleteAnimais = async(params) => {
    const {idanimal} = params
    await db.query(sql_delete, [idanimal])
}

const sql_patch =
    `update animais
    set `
 //codcachorro, nome, sexo, raca, tipo, porte, dataentrada   
const patchAnimais = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams ++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if (params.sexo){
        countParams ++
        fields += (fields?',' : '') + ` sexo = $${countParams}`
        binds.push(params.sexo)
    }
    if(params.raca){
        countParams ++
        fields += (fields?',' : '') + ` raca = $${countParams}`
        binds.push(params.raca)
    }
    if(params.tipo){
        countParams ++
        fields += (fields?',' : '') + ` tipo = $${countParams}`
        binds.push(params.tipo)
    }
    if(params.porte){
        countParams ++
        fields += (fields?',' : '') + ` porte = $${countParams}`
        binds.push(params.porte)
    }
    if(params.dataentrada){
        countParams ++
        fields += (fields?',' : '') + ` dataentrada = $${countParams}`
        binds.push(params.dataentrada)
    }
    let sql = sql_patch + fields + 'where idanimal = $1 '
    return await db.query(sql, binds)

}

module.exports.getAnimais = getAnimais
module.exports.postAnimais = postAnimais
module.exports.deleteAnimais = deleteAnimais
module.exports.patchAnimais = patchAnimais