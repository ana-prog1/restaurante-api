const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const repository = require("../repositories/auth.repository");

async function login(usuario) {
    
    const encontrado = await repository.buscarPorLogin(usuario.login);

    if (!encontrado)
        return null;

    const senhaValida =
        await bcrypt.compare(usuario.senha, encontrado.senha);

    if (!senhaValida)
        return null;

    return jwt.sign(

        {
            id: encontrado.idUsuario,
            login: encontrado.login
        },

        "SEGREDO",

        {
            expiresIn: "1h"
        }

    );

}

module.exports = { login };