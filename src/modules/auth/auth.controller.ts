// src/modules/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto'; // DTO de login
import { CreateUserDto } from './dto/create-user.dto';

@ApiTags('Respuesta del Formulario ENRI')
@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    @ApiBody({ type: CreateUserDto })
    async login(@Body() loginDto: LoginDto) {
        return this.authService.login(loginDto);
    }
}
