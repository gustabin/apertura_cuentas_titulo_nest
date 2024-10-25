import { Controller, Get } from '@nestjs/common';
import { ApigeeService } from './apigee.service';

@Controller('apigee')
export class ApigeeController {
    constructor(private readonly apigeeService: ApigeeService) { }

    @Get('token')
    async getToken() {
        return this.apigeeService.getToken();
    }
}
