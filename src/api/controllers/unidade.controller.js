exports.listar = (req, res) => {

    res.json([
        {
            id:1,
            nome:"Unidade Asa Sul"
        },
        {
            id:2,
            nome:"Unidade Taguatinga"
        }
    ]);

}