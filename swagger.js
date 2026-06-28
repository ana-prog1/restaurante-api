const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API Restaurante",
            version: "1.0.0",
            description: "Documentação da API do sistema Restaurante Raízes do Nordeste"
        },
        servers: [
            {
                url: "http://localhost:1000"
            }
        ]
    },
    apis: ["./src/api/routes/*.js"]
};

module.exports = swaggerJsdoc(options);