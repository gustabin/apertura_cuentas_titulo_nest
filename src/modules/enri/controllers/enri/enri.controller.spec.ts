import { Test, TestingModule } from '@nestjs/testing';
import { EnriController } from './enri.controller';

describe('EnriController', () => {
  let controller: EnriController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EnriController],
    }).compile();

    controller = module.get<EnriController>(EnriController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
