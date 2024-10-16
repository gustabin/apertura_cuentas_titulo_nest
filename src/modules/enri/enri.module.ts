import { Module } from '@nestjs/common';
import { EnriService } from './services/enri/enri.service';
import { EnriController } from './controllers/enri/enri.controller';

@Module({
  providers: [EnriService],
  controllers: [EnriController]
})
export class EnriModule {}
