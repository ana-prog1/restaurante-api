exports.login = (req, res) => {

    const { email, senha } = req.body;

    res.status(200).json({
        token: "jwt-token",
        tipo: "CLIENTE"
    });

};