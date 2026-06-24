const repository = require("../repositories/unidade.repository");

async function listarUnidades() {

    return await repository.listar();

}

module.exports = {
    listarUnidades
};