import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Anuncio } from './Anuncio';

export enum Role {
    DEFAULT = 'DEFAULT',
    CORRETOR = 'CORRETOR',
    IMOBILIARIA = 'IMOBILIARIA'
}

export abstract class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({ type: 'enum', enum: Role, default: Role.DEFAULT })
    role: Role;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    senha: string;

    @Column({ nullable: true })
    telefone: string;
    
}

@Entity('default_users')
export class DefaultUser extends User {
    @Column({ nullable: true, unique: true })
    cpf: string;
    
}

@Entity('Imobiliaria')
export class Imobiliaria extends User {
    @Column({unique: true})
    cnpj: string;

    @Column()
    nomeRepresentante: string;
    
    @Column()
    creci: string;

    @OneToMany(() => Anuncio, (anuncio) => anuncio.imobiliaria)
    anuncios: Anuncio[];
}

@Entity('Corretor')
export class Corretor extends User {
    @Column({unique: true})
    creci: string;

    @OneToMany(() => Anuncio, (anuncio) => anuncio.corretor)
    anuncios: Anuncio[];
}