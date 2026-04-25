import { Router } from "express";
import { UserController } from "../controllers/UserController";

const routes = Router();

routes.post("/estudantes", UserController.createEstudante);
routes.get("/estudantes", UserController.listarEstudantes);

routes.post("/corretores", UserController.createCorretor);
routes.get("/corretores", UserController.listarCorretores);

routes.post("/imobiliarias", UserController.createImobiliaria);
routes.get("/imobiliarias", UserController.listarImobiliarias);

export default routes;