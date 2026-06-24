const express = require("express");

const router = express.Router();

const controller = require("../controllers/pagamento.controller");

router.post("/", controller.pagar);

router.get("/:id", controller.buscar);

module.exports = router;