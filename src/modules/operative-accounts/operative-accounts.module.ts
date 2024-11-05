import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { OperativeAccountsService } from './operative-accounts.service';
import { OperativeAccountsController } from './operative-accounts.controller';

@Module({
    imports: [HttpModule],
    providers: [OperativeAccountsService],
    controllers: [OperativeAccountsController],
})
export class OperativeAccountsModule { }
