const estoqueController = require('../controllers/estoque');

module.exports = (app) => {
    app.get('/estoque', estoqueController.getEstoque
    //#region Documentação
        /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Lista todos os produtos no estoque do canil'    
        */
        //#endregion
    )
    app.post('/estoque', estoqueController.postEstoque
        //#region Documentação
        /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Insere 1 produto no estoque'
         #swagger.parameters['json'] = {
                in: 'body',
                description: 'Dados para inserir algum produto novo ou no estoque',
                type: 'json',
                schema: {
                    idproduto: 3000,
                    descricao: "ração", 
                    quantidade: "10", 
                    tipoanimal: "gato", 
                    valorunit: 5,
                    valortotal: 50 
                   
                }
            }
        */
        //#endregion
    )
    app.delete('/estoque/:idproduto', estoqueController.deleteEstoque
    //#region Documentação
        /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Deleta 1 produto do estoque'
        */
        //#endregion
    )
    app.patch('/estoque/:idproduto', estoqueController.patchEstoque
    //#region Documentação
        /*  #swagger.tags = ['Estoque']
        #swagger.summary = 'Atualização parcial do produto selecionado'
        */
        //#endregion
    )
}