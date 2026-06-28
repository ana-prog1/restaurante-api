exports.listar=(req,res)=>{

    res.json([
        {
            idEstoque: 1,
            nomeEstoque: "principal"
        },
        {
           idEstoque: 2,
           nomeEstoque: "secundario"
        }
    ]);

}

exports.atualizar=(req,res)=>{

    res.json({
        mensagem:"Estoque atualizado com sucesso."
    });

}