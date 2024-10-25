import { Controller, Get, Headers } from '@nestjs/common';
import { JwtDecodeService } from './jwt-decode.service';

@Controller('jwt-decode')
export class JwtDecodeController {
    constructor(private readonly jwtDecodeService: JwtDecodeService) { }

    @Get('decode')
    decodeJwt(@Headers('authorization') authHeader: string) {
        const token = authHeader?.split(' ')[1];
        if (!token) {
            return { error: 'Token no proporcionado' };
        }

        const decodedData = this.jwtDecodeService.decodeToken(token);
        return decodedData;
    }
}
