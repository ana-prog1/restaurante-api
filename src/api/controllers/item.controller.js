const service = require("../../services/item.service");

async function listar(req, res) {

    try {

        const itens = await service.listarItens();

        res.status(200).json(itens);

    } catch (err) {

        res.status(500).json({
            erro: {
                codigo: "ERRO_INTERNO",
                mensagem: err.message
            }
        });

    }

}

async function buscarPorId(req, res) {

    try {

        const item = await service.buscarPorId(req.params.id);

        if (!item) {

            return res.status(404).json({
                erro: {
                    codigo: "ITEM_NAO_ENCONTRADO",
                    mensagem: "Item não encontrado."
                }
            });

        }

        res.status(200).json(item);

    } catch (err) {

        res.status(500).json({
            erro: {
                codigo: "ERRO_INTERNO",
                mensagem: err.message
            }
        });

    }

}

async function cadastrar(req, res) {

    try {

        const { nome, quantidade, preco } = req.body;

        if (!nome || !quantidade || !preco) {

            return res.status(400).json({
                erro: {
                    codigo: "VALIDACAO",
                    mensagem: "Nome, quantidade e preço são obrigatórios."
                }
            });

        }

        const novo = await service.cadastrar({
            nome,
            quantidade,
            preco
        });

        res.status(201).json(novo);

    } catch (err) {

        res.status(500).json({
            erro: {
                codigo: "ERRO_INTERNO",
                mensagem: err.message
            }
        });

    }

}

async function atualizar(req, res) {
    try {

        const atualizado = await service.atualizar(req.params.id, req.body);

        res.status(200).json({
            mensagem: "Item atualizado com sucesso.",
            item: atualizado
        });

    } catch (err) {

        res.status(500).json({
            erro: {
                codigo: "ERRO_INTERNO",
                mensagem: err.message
            }
        });

    }

}

async function excluir(req, res) {

    try {

        await service.excluir(req.params.id);

        res.status(204).send();

    } catch (err) {

        res.status(500).json({
            erro: {
                codigo: "ERRO_INTERNO",
                mensagem: err.message
            }
        });

    }

}

module.exports = {
    listar,
    buscarPorId,
    cadastrar,
    atualizar,
    excluir
};