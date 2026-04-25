import type { Request, Response } from "express";
import { AppDataSource } from "../database/data-source";
import { DefaultUser, Imobiliaria, Corretor, Role } from "../entities/User";

export class UserController {
    static async createEstudante(req: Request, res: Response) {
        try {
            const { nome, email, senha, telefone, cpf } = req.body;
            const repo = AppDataSource.getRepository(DefaultUser);

            const novoUsuario = repo.create({
                role: Role.DEFAULT,
                nome, email, senha, telefone, cpf
            });

            await repo.save(novoUsuario);
            res.status(201).json(novoUsuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar estudante" });
        }
    }

    static async listarEstudantes(req: Request, res: Response) {
        try {
            const repo = AppDataSource.getRepository(DefaultUser);
            const usuarios = await repo.find(); 
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao listar estudantes" });
        }
    }

    static async createCorretor(req: Request, res: Response) {
        try {
            const { nome, email, senha, telefone, creci } = req.body;
            const repo = AppDataSource.getRepository(Corretor);

            const novoUsuario = repo.create({
                role: Role.CORRETOR,
                nome, email, senha, telefone, creci
            });

            await repo.save(novoUsuario);
            res.status(201).json(novoUsuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar corretor" });
        }
    }

    static async listarCorretores(req: Request, res: Response) {
        try {
            const repo = AppDataSource.getRepository(Corretor);
            const usuarios = await repo.find(); 
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao listar corretores" });
        }
    }

    static async createImobiliaria(req: Request, res: Response) {
        try {
            const { nome, email, senha, telefone, cnpj, nomeRepresentante, creci } = req.body;
            const repo = AppDataSource.getRepository(Imobiliaria);

            const novoUsuario = repo.create({
                role: Role.IMOBILIARIA,
                nome, email, senha, telefone, cnpj, nomeRepresentante, creci
            });

            await repo.save(novoUsuario);
            res.status(201).json(novoUsuario);
        } catch (error) {
            console.error(error);
            res.status(500).json({ erro: "Erro ao criar imobiliária" });
        }
    }

    static async listarImobiliarias(req: Request, res: Response) {
        try {
            const repo = AppDataSource.getRepository(Imobiliaria);
            const usuarios = await repo.find(); 
            res.status(200).json(usuarios);
        } catch (error) {
            res.status(500).json({ erro: "Erro ao listar imobiliárias" });
        }
    }
}