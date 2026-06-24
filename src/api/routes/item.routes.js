const express = require("express");

const router = express.Router();

const controller = require("../controllers/item.controller");

console.log(controller);

router.get("/", controller.listar);

//router.get("/:id", controller.buscar);

module.exports = router;