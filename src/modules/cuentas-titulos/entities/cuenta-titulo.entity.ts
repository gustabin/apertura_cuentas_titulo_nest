import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CuentaTitulo {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ type: 'varchar', length: 255 }) // Especifica el tipo y la longitud
    cuentaVinculada: string = '';

    @Column({ type: 'varchar', length: 255 }) // Especifica el tipo y la longitud
    email: string = '';

    @Column({ type: 'int' }) // Especifica tipo entero
    numeroCuenta: number = 0;

    @Column({ type: 'boolean' }) // Especifica tipo booleano
    activo: boolean = true;

    @Column({ type: 'varchar', default: 'Sí' }) // Especifica el tipo
    resolucion: string = 'Sí';

    @Column({ type: 'boolean', default: false }) // Especifica tipo booleano
    terminosAceptados: boolean = false;
}
