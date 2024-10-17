import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CuentaTitulo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    cuentaVinculada: string = ''; // Valor predeterminado

    @Column()
    email: string = ''; // Valor predeterminado

    @Column({ default: 'Sí' })
    resolucion: string = 'Sí'; // Valor predeterminado

    @Column({ default: false })
    terminosAceptados: boolean = false; // Valor predeterminado
}
