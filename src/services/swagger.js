const { application } = require('express');

const swaggerAutogen = require('swagger-autogen')('pt-BR');

const doc = {
    info: {
        version: "1.0.0",
        title: "API CANIL",
        description: "Documentação do trabalho da API CANIL"
    },

    host: `localhost:3000`,
    basePath: "",
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
}

const outputFile =  './src/docs/swagger.yaml';
const endpointsFiles = ['./src/routes/animal.js',
                        './src/routes/donos.js',
                        './src/routes/estoque.js',
                        'src/routes/funcionario.js'
]

swaggerAutogen(outputFile, endpointsFiles, doc)