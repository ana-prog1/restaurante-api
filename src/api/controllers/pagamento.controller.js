exports.pagar=(req,res)=>{

    res.json({

        status:"APROVADO",

        codigo:"PAY123"

    });

}

exports.buscar=(req,res)=>{

    res.json({

        id:req.params.id,

        status:"APROVADO",

        formaPagamento:"PIX"

    });

}