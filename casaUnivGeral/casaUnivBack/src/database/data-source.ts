import "reflect-metadata";
import { DataSource } from "typeorm";
import "dotenv/config";
import { User } from "../entities/User";
import { Property } from "../entities/Property";
import { Photo } from "../entities/Photo";

export const AppDataSource = new DataSource({
  type: "postgres",
  url: process.env.DATABASE_URL || "",
  synchronize: true,
  logging: true,
  entities: [User, Property, Photo],
  subscribers: [],
  migrations: [],
});
