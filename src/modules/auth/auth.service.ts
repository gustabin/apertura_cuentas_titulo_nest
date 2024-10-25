// src/modules/auth/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service'; // Servicio de usuarios
import { User } from './interfaces/user.interface'; // Interfaz de usuario
import { LoginDto } from './dto/login.dto'; // DTO de login

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(loginDto: LoginDto) {
        const user = await this.validateUser(loginDto.username, loginDto.password);
        if (!user) {
            throw new Error('Invalid credentials');
        }
        const payload = {
            "id": 1,
            "estadoRespuesta": "OK",
            "respuesta": {
                "Tipo": "formulario",
                "feriados": null,
                "puedeRescatar": null,
                "puedeSuscribir": null,
                "Id": "frm-confirmacion-1",
                "Nombre": "frm-confirmacion",
                "Implementa": null,
                "Etiqueta": null,
                "Requerido": false,
                "Bloqueado": true,
                "Posicion": 1,
                "Error": 0,
                "Validado": true,
                "Config": "FormularioId:65|SessionId:E7509F7392E891AA62B81D9AC70C7137|IdWizard:7977|Fondo:|MonedaFondo:",
                "IdServicio": "ACT",
                "IdSimulacion": "16678",
                "Comprobante": "10387",
                "Estado": "confirmacion",
                "FormAnterior": "7978",
                "IdAdhesion": 10387,
                "Titulo": "Apertura de cuenta títulos",
                "Nup": "01576531",
                "Segmento": "RTL",
                "Canal": "04",
                "SubCanal": "0099",
                "PerfilInversor": null,
                "Items": [],
                "FechaComprobante": "23/10/2024 - 14:57"
            },
            "itemsMensajeRespuesta": [],
            "respuestaVacia": false,
            "skipLog": false
        };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
