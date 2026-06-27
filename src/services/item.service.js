const repository = require("../repositories/item.repository");

async function listarItens() {

    return await repository.listar();

}

async function buscarPorId(id) {
    return await repository.buscarPorId(id);
}

async function cadastrar(item) {
    return await repository.cadastrar(item);
}

async function atualizar(id, item) {
    return await repository.atualizar(id, item);
}

async function excluir(id) {
    return await repository.excluir(id);
}

module.exports = {
    listarItens,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir
};