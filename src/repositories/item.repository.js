const connection = require("../database/connection");

async function listar() {

    const [rows] = await connection.query(
        "SELECT * FROM item"
    );

    return rows;
}

module.exports = {
    listar
};