import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from 'typeorm';
import { Anuncio } from './Anuncio';

export enum TipoEspaco {
    KITNET = 'KITNET',
    APARTAMENTO = 'APARTAMENTO',
    CASA = 'CASA'
}

export enum TipoIcone {
    MOCK_1 = 'MOCK_1',
    MOCK_2 = 'MOCK_2',
    MOCK_3 = 'MOCK_3'
}

@Entity()
export class Localizacao {
    @PrimaryGeneratedColumn()
    id_pin: number;

    @Column('text')
    endereco: string;

    @Column()
    coordenada: string;

    @Column({ type: 'enum', enum: TipoEspaco })
    tipoEspaco: TipoEspaco;

    @Column() 
    nome: string;

    @Column({ type: 'enum', enum: TipoIcone })
    tipoIcone: TipoIcone;

    @Column('text')
    descricao: string;

    @OneToOne(() => Anuncio, (anuncio) => anuncio.localizacao)
    @JoinColumn({ name: 'idAnuncio' })
    anuncio: Anuncio;
}
