import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentaTitulo } from './entities/cuenta-titulo.entity';
import { CuentasTitulosService } from './services/cuentas-titulos/cuentas-titulos.service';
import { CuentasTitulosController } from './controllers/cuentas-titulos/cuentas-titulos.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CuentaTitulo])],
  providers: [CuentasTitulosService],
  controllers: [CuentasTitulosController],
})
export class CuentasTitulosModule { }
