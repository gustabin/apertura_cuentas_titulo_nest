import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasTitulosModule } from './modules/cuentas-titulos/cuentas-titulos.module';
import { EnriModule } from './modules/enri/enri.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { AppController } from './app.controller';

@Module({
  // imports: [
  //   TypeOrmModule.forRoot(),
  //   CuentasTitulosModule,
  //   EnriModule,
  //   JobsModule,
  // ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/db.sqlite',  // La ruta de tu base de datos SQLite
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // Sincronizar el esquema automáticamente
    }),
    CuentasTitulosModule,
    EnriModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule { }
