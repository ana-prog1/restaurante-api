const express = require("express");

const router = express.Router();

const controller = require("../controllers/pedido.controller");

router.post("/", controller.criar);

router.get("/", controller.listar);

router.get("/:id", controller.buscar);

router.put("/:id/status", controller.alterarStatus);

router.post("/:id/avaliacao", controller.avaliar);

module.exports = router;