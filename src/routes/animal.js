const animalController = require('../controllers/animal');

module.exports = (app) => {
    app.get('/animal', animalController.getAnimais
    //#region Documentação
        /*  #swagger.tags = ['Animais']
        #swagger.summary = 'Lista dos animais'    
        */
        //#endregion
    )
    app.post('/animal', animalController.postAnimais
        //#region Documentação
        /*  #swagger.tags = ['Animais']
        #swagger.summary = 'Insere 1 animal'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para inserir um animal',
                type: 'json',
                schema: {
                    idanimal: 1, 
                    nome: "Max", 
                    sexo: "macho", 
                    raca: "Labrador", 
                    tipo: "cachorro", 
                    porte: "grande", 
                    dataentrada: '10/08/2021'
                   
                }
            }
        */
        //#endregion
    )
    app.delete('/animal/:idanimal', animalController.deleteAnimais
    //#region Documentação
        /*  #swagger.tags = ['Animais']
        #swagger.summary = 'Deleta 1 animal'
        */
        //#endregion
    )
    app.patch('/animal/:idanimal', animalController.patchAnimais
    //#region Documentação
        /*  #swagger.tags = ['Animais']
        #swagger.summary = 'Atualização parcial do animal'
        */
        //#endregion
    )
}