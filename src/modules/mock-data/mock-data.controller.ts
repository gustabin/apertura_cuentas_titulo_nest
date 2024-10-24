// src/mock-data/mock-data.controller.ts
import { Controller, Get } from '@nestjs/common';
import { MockDataService } from './mock-data.service';
import { MockDataEntity } from './mock-data.entity';

@Controller('mock-data')
export class MockDataController {
    constructor(private readonly mockDataService: MockDataService) { }

    @Get()
    getMockData(): MockDataEntity {
        console.log('Llamando a getMockData()');
        return this.mockDataService.getMockData();
    }
}
