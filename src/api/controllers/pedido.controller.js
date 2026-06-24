exports.criar=(req,res)=>{

    res.status(201).json({

        idPedido:10,

        status:"RECEBIDO",

        valorTotal:98

    });

}

exports.listar=(req,res)=>{

    res.json([
        {
            id:10,
            status:"EM_PREPARO",
            valorTotal:98
        }
    ]);

}

exports.buscar=(req,res)=>{

    res.json({

        id:req.params.id,

        status:"EM_PREPARO",

        valorTotal:98

    });

}

exports.alterarStatus=(req,res)=>{

    res.json({

        mensagem:"Status atualizado."

    });

}

exports.avaliar=(req,res)=>{

    res.json({

        mensagem:"Avaliação registrada."

    });

}