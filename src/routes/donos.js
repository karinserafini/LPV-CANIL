const donoController = require('../controllers/donos');

module.exports = (app) => {
    app.get('/donos', donoController.getDono
    //#region Documentação
        /*  #swagger.tags = ['Donos']
        #swagger.summary = 'Lista dos donos que adotaram algum animal do canil'    
        */
        //#endregion
    )
    app.post('/donos', donoController.postDono
        //#region Documentação
        /*  #swagger.tags = ['Donos']
        #swagger.summary = 'Insere 1 dono'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para inserir algum dono de animal',
                type: 'json',
                schema: {
                    iddono: 1500, 
                    nome: "Karin Serafini", 
                    cpf: "11745560940", 
                    telefone: "49998207965", 
                    endereco: "Rua Conde DEu, 566, SA"  
                   
                }
            }
        */
        //#endregion
    )
    app.delete('/donos/:iddono', donoController.deleteDono
    //#region Documentação
        /*  #swagger.tags = ['Donos']
        #swagger.summary = 'Deleta 1 dono'
        */
        //#endregion
    )
    app.patch('/donos/:iddono', donoController.patchDono
    //#region Documentação
        /*  #swagger.tags = ['Donos']
        #swagger.summary = 'Atualização parcial do dono'
        */
        //#endregion
    )
}