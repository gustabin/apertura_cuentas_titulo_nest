import { Module } from '@nestjs/common';
import { ApigeeController } from './apigee.controller';
import { ApigeeService } from './apigee.service';

@Module({
    controllers: [ApigeeController],
    providers: [ApigeeService],
})
export class ApigeeModule { }
