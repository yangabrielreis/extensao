import { Entity, PrimaryGeneratedColumn, Column, OneToMany, TableInheritance, ChildEntity, ManyToMany, JoinTable, ManyToOne, JoinColumn, CreateDateColumn } from 'typeorm';
import { Anuncio } from './Anuncio';
import { DefaultUser } from './User';

@Entity()
export class Interesse {
    @PrimaryGeneratedColumn()
    idInteresse: number;

    @ManyToOne(() => DefaultUser)
    @JoinColumn({ name: 'idUser' })
    user: DefaultUser;

    @ManyToOne(() => Anuncio)
    @JoinColumn({ name: 'idAnuncio' })
    anuncio: Anuncio;

    @CreateDateColumn()
    dataInteresse: Date;
}