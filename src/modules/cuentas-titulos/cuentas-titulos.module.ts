import { Module } from '@nestjs/common';
import { CuentasTitulosService } from './services/cuentas-titulos/cuentas-titulos.service';
import { CuentasTitulosController } from './controllers/cuentas-titulos/cuentas-titulos.controller';

@Module({
  providers: [CuentasTitulosService],
  controllers: [CuentasTitulosController]
})
export class CuentasTitulosModule {}