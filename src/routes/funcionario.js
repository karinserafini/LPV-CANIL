const funcionarioController = require('../controllers/funcionario');

module.exports = (app) => {
    app.get('/funcionario', funcionarioController.getFuncionarios
    //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Lista dos funcionarios do canil'    
        */
        //#endregion
    )
    app.post('/funcionario', funcionarioController.postFuncionarios
        //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Insere 1 funcionario'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para inserir um funcionario',
                type: 'json',
                schema: {
                    idfuncionario: 500, 
                    nome: "Luana Scheeren", 
                    cpf: "14745675912", 
                    telefone: "49984292935", 
                    endereco: "Rua Pres. Castelo Branco, 165, SA"  
                   
                }
            }
        */
        //#endregion
    )
    app.delete('/funcionario/:idfuncionario', funcionarioController.deleteFuncionarios
    //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Deleta 1 funcionario'
        */
        //#endregion
    )
    app.patch('/funcionario/:idfuncionario', funcionarioController.patchFuncionarios
    //#region Documentação
        /*  #swagger.tags = ['Funcionarios']
        #swagger.summary = 'Atualização parcial de um funcionario'
        */
        //#endregion
    )
}