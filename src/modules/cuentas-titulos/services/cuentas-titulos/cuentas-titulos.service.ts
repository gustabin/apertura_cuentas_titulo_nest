import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CuentaTitulo } from './../../entities/cuenta-titulo.entity';

@Injectable()
export class CuentasTitulosService {
    constructor(
        @InjectRepository(CuentaTitulo)
        private readonly cuentaTituloRepository: Repository<CuentaTitulo>,
    ) { }

    async crearCuentaTitulo(cuentaVinculada: string, email: string, terminosAceptados: boolean) {
        // Validar si los términos son aceptados
        if (!terminosAceptados) {
            return { message: 'Debe aceptar los términos y condiciones', statusCode: 400 };
        }

        // Crear una nueva cuenta título
        const cuentaTitulo = this.cuentaTituloRepository.create({
            cuentaVinculada,
            email,
            resolucion: 'Sí', // Resolución 11/2011 debe ser 'Sí'
            terminosAceptados,
        });

        // Guardar la cuenta título en la base de datos
        await this.cuentaTituloRepository.save(cuentaTitulo);

        // Retornar respuesta exitosa
        return {
            message: 'Cuenta título creada exitosamente',
            statusCode: 201,
            cuentaTitulo,
        };
    }
}
