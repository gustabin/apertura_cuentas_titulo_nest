// src/modules/users/users.module.ts
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';

@Module({
    providers: [UsersService],
    exports: [UsersService], // Exporta el servicio para que esté disponible en otros módulos
})
export class UsersModule { }
