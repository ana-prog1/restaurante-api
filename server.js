const express = require("express");

const app = require("./src/api/app");

const PORT = 1000;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});