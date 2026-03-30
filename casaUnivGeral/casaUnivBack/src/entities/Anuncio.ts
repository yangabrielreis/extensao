import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './User';
import { Localizacao } from './Localizacao';
import { Imagens } from './Imagens';

@Entity()
export class Anuncio {
    @PrimaryGeneratedColumn()
    idAnuncio: number;

    @Column()
    nome: string;

    @Column('decimal', { precision: 10, scale: 2 })
    precoTotal: number;

    @Column('text')
    descricao: string;

    @Column({ type: 'boolean', default: false })
    internet: boolean;

    @Column({ type: 'boolean', default: false })
    lavanderia: boolean;

    @Column({ type: 'boolean', default: false })
    mobiliada: boolean;

    @Column({ type: 'boolean', default: false })
    pet: boolean;

    @Column({ type: 'boolean', default: false })
    agua: boolean;

    @Column({ type: 'boolean', default: false })
    luz: boolean;

    @Column('decimal', { precision: 10, scale: 2, default: 0 })
    condominio: number;

    @Column({ type: 'boolean', default: false })
    garagem: boolean;

    @ManyToOne(() => User, (user) => user.anuncios)
    @JoinColumn({ name: 'idUser' })
    anunciante: User;

    @OneToOne(() => Localizacao, (localizacao) => localizacao.anuncio, { cascade: true })
    localizacao: Localizacao;

    @OneToMany(() => Imagens, (imagem) => imagem.anuncio, { cascade: true })
    imagens: Imagens[];
}
