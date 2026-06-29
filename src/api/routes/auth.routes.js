const express = require("express");

const router = express.Router();

const controller = require("../controllers/auth.controller");
/**
 * @swagger
 * /auth:
 *   post:
 *     summary: Autentica um usuário
 *     description: Realiza o login do usuário e retorna um token JWT para acesso às rotas protegidas.
 *     tags:
 *       - Autenticação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - login
 *               - senha
 *             properties:
 *               login:
 *                 type: string
 *                 example: ana
 *               senha:
 *                 type: string
 *                 example: ana123
 *     responses:
 *       200:
 *         description: Login realizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       401:
 *         description: Usuário ou senha inválidos.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 mensagem:
 *                   type: string
 *                   example: Usuário ou senha inválidos.
 */
router.post("/", controller.login);

module.exports = router;