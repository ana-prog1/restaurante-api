const express = require("express");

const router = express.Router();

const controller = require("../controllers/item.controller");

console.log(controller);
/**
 * @swagger
 * /itens:
 *   get:
 *     summary: Lista todos os itens
 *     tags:
 *       - Item
 *     responses:
 *       200:
 *         description: Lista de itens.
 */
router.get("/", controller.listar);
/**
 * @swagger
 * /itens/{id}:
 *   get:
 *     summary: Busca um item pelo ID
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Item encontrado.
 *       404:
 *         description: Item não encontrado.
 */
router.get("/:id", controller.buscarPorId);
/**
 * @swagger
 * /itens:
 *   post:
 *     summary: Cadastra um novo item
 *     tags:
 *       - Item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               quantidade:
 *                 type: integer
 *               preco:
 *                 type: number
 *             example:
 *               nome: Farinha
 *               quantidade: 5
 *               preco: 2
 *     responses:
 *       201:
 *         description: Item cadastrado com sucesso.
 *       400:
 *         description: Dados inválidos.
 */
router.post("/", controller.cadastrar);
/**
 * @swagger
 * /itens/{id}:
 *   put:
 *     summary: Atualiza um item
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Item atualizado.
 */
router.put("/:id", controller.atualizar);
/**
 * @swagger
 * /itens/{id}:
 *   delete:
 *     summary: Remove um item
 *     tags:
 *       - Item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Item removido.
 */
router.delete("/:id", controller.excluir);

module.exports = router;