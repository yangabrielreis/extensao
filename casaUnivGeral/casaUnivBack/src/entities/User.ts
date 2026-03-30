import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance, ChildEntity, ManyToMany, JoinTable } from 'typeorm';
import { Anuncio } from './Anuncio';

export enum Role {
    DEFAULT = 'DEFAULT',
    PROFISSIONAL = 'PROFISSIONAL',
    CORRETOR = 'CORRETOR',
    IMOBILIARIA = 'IMOBILIARIA'
}

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export class User {
    @PrimaryGeneratedColumn()
    idUser: number;

    @Column({ type: 'enum', enum: Role, default: Role.DEFAULT })
    role: Role;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ nullable: true })
    telefone: string;

    @OneToMany(() => Anuncio, (anuncio) => anuncio.anunciante)
    anuncios: Anuncio[];

}

@ChildEntity()
export class DefaultUser extends User {
    @Column({ nullable: true, unique: true })
    cpf: string;
}

@ChildEntity()
export class Imobiliaria extends User {
    @Column({ nullable: true, unique: true })
    cnpj: string;

    @Column({ nullable: true })
    nomeRepresentante: string;
    
    @Column({ nullable: true })
    creci: string;
}

@ChildEntity()
export class Corretor extends User {
    @Column({ nullable: true })
    creci: string;
}
