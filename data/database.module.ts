import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'oracle',  // Especifica que estás utilizando Oracle
            host: 'adldsorcldesa.ar.bsch',  // Cambia con tu host de Oracle
            port: 1521,  // Puerto por defecto de Oracle
            sid: 'srv_RIO181H_ap',  // SID de tu base de datos Oracle
            username: 'MAPS',  // Usuario de la base de datos Oracle
            password: 'Sherman_1938',  // Contraseña del usuario
            synchronize: true,  // Cambia a false en producción
            logging: true,  // Habilita el log para ver las consultas
            entities: [
                // Aquí van tus entidades
                // Por ejemplo:
                // TuEntidad,
            ],
        }),
    ],
    exports: [TypeOrmModule],  // Exporta TypeOrmModule para que otras partes de la aplicación puedan usarlo
})
export class DatabaseModule { }
