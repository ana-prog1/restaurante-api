const express = require("express");

const app = express();

app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/unidades", require("./routes/unidade.routes"));
app.use("/itens", require("./routes/item.routes"));
app.use("/estoque", require("./routes/estoque.routes"));
app.use("/pedidos", require("./routes/pedido.routes"));
app.use("/pagamentos", require("./routes/pagamento.routes"));

module.exports = app;