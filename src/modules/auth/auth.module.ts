// src/modules/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from '../users/users.module'; // Importa el módulo de usuarios

@Module({
    imports: [
        UsersModule,  // Asegúrate de importar UsersModule aquí
        JwtModule.register({
            secret: 'yourSecretKey',  // Cambia esto por tu clave secreta
            signOptions: { expiresIn: '1h' },
        }),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
})
export class AuthModule { }
