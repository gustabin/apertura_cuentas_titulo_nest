import { Controller, Get, Headers } from '@nestjs/common';
import { OperativeAccountsService } from './operative-accounts.service';
import { Observable, from } from 'rxjs';

@Controller('operative-accounts')
export class OperativeAccountsController {
    constructor(private readonly operativeAccountsService: OperativeAccountsService) { }

    @Get('/contracts')
    getContracts(@Headers('Authorization') token: string): Observable<any> {
        return from(this.operativeAccountsService.getContracts(token));
    }
}
