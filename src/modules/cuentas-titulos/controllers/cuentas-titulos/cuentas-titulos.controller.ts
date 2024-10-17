import { Controller, Post, Body } from '@nestjs/common';
import { CuentasTitulosService } from './../../services/cuentas-titulos/cuentas-titulos.service';
import { ApiBody } from '@nestjs/swagger';

@Controller('cuentas-titulos')
export class CuentasTitulosController {
    constructor(private readonly cuentasTitulosService: CuentasTitulosService) { }

    @Post('crear')
    @ApiBody({
        description: 'Datos para crear una cuenta título',
        type: Object, // Se puede crear un DTO si prefieres
    })
    async crearCuentaTitulo(
        @Body('cuentaVinculada') cuentaVinculada: string,
        @Body('email') email: string,
        @Body('terminosAceptados') terminosAceptados: boolean,
    ) {
        const result = await this.cuentasTitulosService.crearCuentaTitulo(cuentaVinculada, email, terminosAceptados);
        return result;  // Regresamos el resultado del servicio
    }
}
