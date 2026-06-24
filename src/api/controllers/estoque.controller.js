exports.listar=(req,res)=>{

    res.json([
        {
            item:"Pizza",
            quantidade:20
        },
        {
            item:"Refrigerante",
            quantidade:50
        }
    ]);

}

exports.atualizar=(req,res)=>{

    res.json({
        mensagem:"Estoque atualizado com sucesso."
    });

}