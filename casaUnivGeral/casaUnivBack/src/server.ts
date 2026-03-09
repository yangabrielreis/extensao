import "reflect-metadata";
import express from "express";
import { AppDataSource } from "./database/data-source";
import userRoutes from "./routes/userRoutes";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/usuarios", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("DB ok");
    app.listen(port, () => {
      console.log("API ok");
    });
  })
  .catch((error: unknown) => {
    console.error("Erro DB", error);
  });
