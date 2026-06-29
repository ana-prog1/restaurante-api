const service = require("../../services/auth.service");

async function login(req, res) {

    const token = await service.login(req.body);

    if (!token) {

        return res.status(401).json({
            mensagem: "Usuário ou senha inválidos."
        });

    }

    res.json({ token });

}

module.exports = { login };