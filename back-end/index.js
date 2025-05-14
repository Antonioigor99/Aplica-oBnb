import "dotenv/config";
import express from "express";
import UserRoutes from "./domains/users/routes.js";
const app = express();
const { PORT } = process.env;

app.use(express.json()); // necessário para receber dados em POST transforma todo post em json
app.use("/users", UserRoutes);

app.listen(PORT, () => {
  console.log(`Servidor está na porta ${PORT}`);
});
