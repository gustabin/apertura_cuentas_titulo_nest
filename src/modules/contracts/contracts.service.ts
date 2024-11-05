import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ContractsService {
    async getContracts(): Promise<any> {
        const config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://localhost/api-employees/contracts',
            headers: {
                'Authorization': 'Bearer your_secret_token'
            }
        };

        try {
            const response = await axios.request(config);
            return response.data;
        } catch (error) {
            console.error(`Error fetching contracts: ${error}`);
            throw new Error('Failed to fetch contracts');
        }
    }
}
