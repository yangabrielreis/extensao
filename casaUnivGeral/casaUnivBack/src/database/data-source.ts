import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entities/User";
import { Anuncio } from "../entities/Anuncio";
import { Imagens } from "../entities/Imagens";
import { Interesse } from "../entities/Interesse";
import { Localizacao } from "../entities/Localizacao";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || "",
  synchronize: true,
  logging: true,
  entities: [User, Anuncio, Imagens, Interesse, Localizacao],
  subscribers: [],
  migrations: [],
});
