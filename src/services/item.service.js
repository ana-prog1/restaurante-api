const repository = require("../repositories/item.repository");

async function listarItens() {

    return await repository.listar();

}

module.exports = {
    listarItens
};