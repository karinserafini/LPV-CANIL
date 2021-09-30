const db = require ('../configs/pg')

const sql_get =
    `select idfuncionario, 
    nome, 
    cpf, 
    telefone, 
    endereco    
    from funcionario`

const getFuncionarios = async() => {
    let funcionario = {}
    await db.query(sql_get)
        .then(ret => funcionario = {total: ret.rows.length, funcionario: ret.rows})
        .catch(err => funcionario = err.stack)
        return funcionario
}

const sql_insert = 
    `insert into funcionario (idfuncionario, nome, cpf, telefone, endereco )
                    values ($1, $2, $3, $4, $5)`

const postFuncionarios = async (params) => {
    const {idfuncionario, nome, cpf, telefone, endereco} = params
    await db.query(sql_insert, [idfuncionario, nome, cpf, telefone, endereco ])
}

const sql_delete =
    `delete from funcionario 
        where idfuncionario = $1`
    
    const deleteFuncionarios = async(params) => {
    const {id} = params
    await db.query(sql_delete [id])
}

const sql_patch =
    `update funcionario
    set `
//*nome, cpf, telefone, endereco
    const patchFuncionarios = async(params) => {
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
        
        let sql = sql_patch + fields + 'where idfuncionario = $1 '
        return await db.query(sql, binds)
    
    }


module.exports.postFuncionarios = postFuncionarios 
module.exports.getFuncionarios = getFuncionarios 
module.exports.deleteFuncionarios = deleteFuncionarios
module.exports.patchFuncionarios = patchFuncionarios