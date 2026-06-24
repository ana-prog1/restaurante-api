const express = require("express");

const router = express.Router();

const controller = require("../controllers/unidade.controller");

router.get("/", controller.listar);

module.exports = router;