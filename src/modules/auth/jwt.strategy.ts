// src/modules/auth/jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from '../users/users.service'; // Servicio de usuarios
import { User } from './interfaces/user.interface'; // Interfaz de usuario

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private usersService: UsersService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'tu_secreto', // Debe coincidir con el secreto del módulo
        });
    }

    async validate(payload: any) {
        return this.usersService.findOneById(payload.sub);
    }
}
