import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance, ChildEntity, ManyToMany, JoinTable, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Anuncio } from './Anuncio';
import { User } from './User';

@Entity()
export class Interesse {
    @PrimaryGeneratedColumn()
    idInteresse: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'idUser' })
    user: User;

    @ManyToOne(() => Anuncio)
    @JoinColumn({ name: 'idAnuncio' })
    anuncio: Anuncio;

    @CreateDateColumn()
    dataInteresse: Date;
}