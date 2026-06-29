const jwt = require("jsonwebtoken");

function autenticar(req, res, next){

    const auth = req.headers.authorization;

    if(!auth){

        return res.status(401).json({

            mensagem: "Token não informado."

        });

    }

    const token = auth.replace("Bearer ", "");

    try{

        req.usuario = jwt.verify(token, "SEGREDO");

        next();

    }catch{

        return res.status(401).json({

            mensagem: "Token inválido."

        });

    }

}

module.exports = autenticar;