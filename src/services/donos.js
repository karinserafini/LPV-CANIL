const db = require ('../configs/pg')

const sql_get =
    `select iddono,
    nome, 
    cpf, 
    telefone, 
    endereco
    from donos`

const getDono = async() => {
    let dono = {}
    await db.query(sql_get)
        .then(ret => dono = {total: ret.rows.length, dono: ret.rows})
        .catch(err => dono = err.stack)
        return dono
}

const sql_insert = 
    `insert into donos (iddono, nome, cpf, telefone, endereco )
                    values ($1, $2, $3, $4, $5)`

const postDono = async (params) => {
    const {iddono, nome, cpf, telefone, endereco} = params
    await db.query(sql_insert, [iddono, nome, cpf, telefone, endereco ])
}

const sql_delete =
    `delete from donos 
        where iddono = $1`
    
    const deleteDono = async(params) => {
    const {id} = params
    await db.query(sql_delete [id])
}

const sql_patch =
    `update donos
    set `
    
const patchDono = async(params) => {
    let fields = ''
    let binds = []
    binds.push(params.id)
    let countParams = 1
    if (params.nome) {
        countParams ++
        fields += ` nome = $${countParams}`
        binds.push(params.nome)
    }
    if(params.cpf){
        countParams++
        fields += (fields?',' :'') + ` cpf = $${countParams}`
        binds.push(params.cpf)
    }
    if (params.telefone){
        countParams ++
        fields += (fields?',' : '') + ` telefone = $${countParams}`
        binds.push(params.telefone)
    }
    if(params.endereco){
        countParams ++
        fields += (fields?',' : '') + ` endereco = $${countParams}`
        binds.push(params.endereco)
    }
    let sql = sql_patch + fields + 'where iddono = $1 '
    return await db.query(sql, binds)

}

module.exports.getDono = getDono
module.exports.postDono = postDono
module.exports.deleteDono = deleteDono
module.exports.patchDono = patchDono