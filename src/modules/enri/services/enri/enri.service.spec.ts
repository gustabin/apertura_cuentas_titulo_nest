import { Test, TestingModule } from '@nestjs/testing';
import { EnriService } from './enri.service';

describe('EnriService', () => {
  let service: EnriService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EnriService],
    }).compile();

    service = module.get<EnriService>(EnriService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
