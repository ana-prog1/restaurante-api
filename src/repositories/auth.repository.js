const connection = require("../database/connection");

async function buscarPorLogin(login){

    const [rows] = await connection.query(

        "SELECT * FROM usuario WHERE login = ?",

        [login]

    );

    return rows[0];

}

module.exports = {

    buscarPorLogin

};