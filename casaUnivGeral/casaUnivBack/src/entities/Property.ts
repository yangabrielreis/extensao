// src/entities/Property.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany, JoinColumn } from "typeorm";
import { PropertyStatus } from "./enums";
import { User } from "./User";
import { Photo } from "./Photo";

@Entity('properties')
export class Property {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    titulo: string;

    @Column({ type: 'text' })
    descricao: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    valor: number;

    @Column({ default: false })
    mobiliada: boolean;

    @Column({ nullable: true })
    voltagem: string;

    @Column({ type: 'float', nullable: true })
    tamanho: number;

    @Column({ default: false }) inc_net: boolean;
    @Column({ default: false }) inc_luz: boolean;
    @Column({ default: false }) inc_agua: boolean;
    @Column({ default: false }) inc_condo: boolean;

    @Column() bairro: string;
    @Column() endereco: string;
    @Column({ nullable: true }) numero: string;
    
    @Column({ type: 'float', nullable: true }) latitude: number;
    @Column({ type: 'float', nullable: true }) longitude: number;

    @Column({ type: 'enum', enum: PropertyStatus, default: PropertyStatus.PENDING })
    status: PropertyStatus;

    @Column()
    ownerId: number;

    @ManyToOne(() => User, (user: User) => user.imoveis)
    @JoinColumn({ name: 'ownerId' })
    owner: User;

    @OneToMany(() => Photo, (photo: Photo) => photo.property)
    fotos: Photo[];

    @CreateDateColumn() createdAt: Date;
    @UpdateDateColumn() updatedAt: Date;
}
