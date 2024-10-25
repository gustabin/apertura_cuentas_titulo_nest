import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ApigeeService {
    private readonly tokenUrl = 'https://api-dev.santander.ar.bsch/oauthv2/token';

    async getToken() {
        const clientId = '8uBSTZipPVYtK83MKxaAkakAnwfyEs7n';
        const clientSecret = 'nMDUCBMvoJ51VFP2j7gn2lW1TroQDez0';

        // Codificar ClientID y Secret en Base64
        const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

        try {
            const response = await axios.post(this.tokenUrl, 'grant_type=client_credentials', {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': `Basic ${auth}`,
                },
            });

            return response.data; // Devuelve la respuesta de la API
        } catch (error) {
            // Manejar errores aquí
            console.error('Error al obtener el token:', error);
            throw error; // O puedes lanzar un error específico
        }
    }
}
