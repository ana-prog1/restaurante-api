const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("../../swagger");

const app = express();

app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec),
    express.json()
);

app.use("/auth", require("./routes/auth.routes"));
app.use("/unidades", require("./routes/unidade.routes"));
app.use("/itens", require("./routes/item.routes"));
app.use("/estoque", require("./routes/estoque.routes"));
app.use("/pedidos", require("./routes/pedido.routes"));
app.use("/pagamentos", require("./routes/pagamento.routes"));

module.exports = app;