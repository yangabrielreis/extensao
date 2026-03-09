import type { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { User } from "../entities/User";

export class UserController {
    static async create(req: Request, res: Response) {
        try {
            const { nome, email, senha } = req.body;
            
            const userRepository = AppDataSource.getRepository(User);

            const novoUsuario = userRepository.create({
                nome,
                email,
                senha, // CRIPTOGRAFAR DEPOIS
            });

            await userRepository.save(novoUsuario);

            res.status(201).json(novoUsuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro criar" });
        }
    }

    static async listar(req: Request, res: Response) {
    try {
      const userRepository = AppDataSource.getRepository(User);
      
      const usuarios = await userRepository.find(); 
      
      res.status(200).json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro listar" });
    }
  }
}
