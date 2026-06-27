const connection = require("../database/connection");

async function listar() {

    const [rows] = await connection.query(
        "SELECT * FROM item"
    );

    return rows;
}

async function buscarPorId(id) {

    const [rows] = await connection.query(
        "SELECT * FROM Item WHERE idItem = ?",
        [id]
    );

    return rows[0];

}

async function cadastrar(item) {

    const [result] = await connection.query(

        `INSERT INTO item
        (nomeItem, quantidade, preco)
        VALUES (?, ?, ?)`,
        [
            item.nome,
            item.quantidade,
            item.preco
        ]

    );

    return buscarPorId(result.insertId);

}

async function atualizar(id, item) {

    await connection.query(

        `UPDATE item
         SET nomeItem = ?, quantidade = ?, preco = ?
         WHERE idItem = ?`,

        [
            item.nome,
            item.quantidade,
            item.preco,
            id
        ]

    );

    return buscarPorId(id);

}

async function excluir(id) {

    await connection.query(

        "DELETE FROM Item WHERE idItem = ?",

        [id]

    );

}

module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir
};