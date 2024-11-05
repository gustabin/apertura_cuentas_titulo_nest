import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class OperativeAccountsService {
    constructor(private readonly httpService: HttpService) { }

    async getContracts(token: string) {
        const url = 'http://localhost/api-employees/contracts';
        const headers = { Authorization: `Bearer ${token}` };

        try {
            const response = await firstValueFrom(
                this.httpService.get(url, { headers })
            );
            return response.data;
        } catch (error) {
            if (error instanceof Error) {
                throw new Error(`Error fetching contracts: ${error.message}`);
            }
            throw new Error('Error fetching contracts');
        }
    }
}
