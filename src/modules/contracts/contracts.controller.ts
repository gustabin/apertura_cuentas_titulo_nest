import { Controller, Get } from '@nestjs/common';
import { ContractsService } from './contracts.service';

@Controller('contracts')
export class ContractsController {
    constructor(private readonly contractsService: ContractsService) { }

    @Get()
    async getAllContracts() {
        return await this.contractsService.getContracts();
    }
}
