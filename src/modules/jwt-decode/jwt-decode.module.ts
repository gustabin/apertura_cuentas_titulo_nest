import { Module } from '@nestjs/common';
import { JwtDecodeService } from './jwt-decode.service';
import { JwtDecodeController } from './jwt-decode.controller';

@Module({
    providers: [JwtDecodeService],
    controllers: [JwtDecodeController],
    exports: [JwtDecodeService], // Exporta el servicio si necesitas usarlo en otros módulos
})
export class JwtDecodeModule { }
