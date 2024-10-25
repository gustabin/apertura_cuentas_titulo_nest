import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class JwtDecodeService {
    decodeToken(token: string): any {
        try {
            const decoded = jwt.decode(token); // Decodifica el JWT
            return decoded;
        } catch (error) {
            throw new Error('Error al decodificar el token');
        }
    }
}
