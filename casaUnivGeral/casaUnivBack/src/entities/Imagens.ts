import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Anuncio } from './Anuncio';

@Entity()
export class Imagens {
  @PrimaryGeneratedColumn()
  idImagens: number;

  @Column('text')
  imgAnuncio: string;

  @ManyToOne(() => Anuncio, (anuncio) => anuncio.imagens)
  @JoinColumn({ name: 'idAnuncio' })
  anuncio: Anuncio;
}
