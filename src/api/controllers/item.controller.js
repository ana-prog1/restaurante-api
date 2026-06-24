const service = require("../../services/item.service");

async function listar(req, res) {

    try{

        const itens = await service.listarItens();

        res.status(200).json(itens);

    }catch(err){

        res.status(500).json({
            erro: err.message
        });

    }

}

module.exports = {
    listar
};