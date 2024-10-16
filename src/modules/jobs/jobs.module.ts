import { Module } from '@nestjs/common';
import { JobsService } from './services/jobs/jobs.service';
import { JobsController } from './controllers/jobs/jobs.controller';

@Module({
  providers: [JobsService],
  controllers: [JobsController]
})
export class JobsModule {}
