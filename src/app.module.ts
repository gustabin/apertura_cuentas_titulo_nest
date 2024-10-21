import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasTitulosModule } from './modules/cuentas-titulos/cuentas-titulos.module';
import { EnriModule } from './modules/enri/enri.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './../data/database.module';  // Si tienes alguna lógica de conexión extra

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'oracle',  // Tipo de base de datos
      host: 'adldsorcldesa.ar.bsch',  // Dirección del host
      port: 1521,  // Puerto por defecto de Oracle
      sid: 'srv_RIO181H_ap',  // El SID de tu base de datos Oracle
      username: 'tu_usuario',  // Usuario de la base de datos Oracle
      password: 'tu_contraseña',  // Contraseña del usuario
      synchronize: true,  // Cambia esto a false en producción para evitar cambios automáticos en la DB
      logging: true,  // Habilita el log para ver las consultas realizadas
      entities: [
        // Aquí debes listar todas las entidades que utilizarás
        // Ejemplo:
        // TuEntidad,
      ],
    }),
    DatabaseModule,  // Si tienes alguna lógica de conexión extra (por ejemplo, para gestionar la conexión de alguna otra manera)
    CuentasTitulosModule,
    EnriModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
