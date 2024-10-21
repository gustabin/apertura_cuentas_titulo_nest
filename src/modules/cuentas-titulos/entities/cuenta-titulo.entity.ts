import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('maps.MAPS_ADHESIONES')
export class CuentaTitulo {
    @PrimaryGeneratedColumn()
    ID_ADHESIONES!: number;

    @Column()
    NRO_CTA_OPER_ACT: string = ''; // Valor predeterminado

    @Column()
    email: string = ''; // Valor predeterminado

    @Column({ default: 'Sí' })
    resolucion: string = 'Sí'; // Valor predeterminado

    @Column({ default: false })
    terminosAceptados: boolean = false; // Valor predeterminado
}
