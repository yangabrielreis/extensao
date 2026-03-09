import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Role } from "./enums";
import { Property } from "./Property";

@Entity('users') 
export class User {
    @PrimaryGeneratedColumn('increment') 
    id: number;

    @Column()
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column()
    senha: string;

    @Column({ type: 'enum', enum: Role, default: Role.STUDENT })
    role: Role;

    @Column({ nullable: true })
    telefone: string;

    @Column({ nullable: true })
    creci: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Property, (property) => property.owner)
    imoveis: Property[];
}
