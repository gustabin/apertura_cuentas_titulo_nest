import { Test, TestingModule } from '@nestjs/testing';
import { CuentasTitulosController } from './cuentas-titulos.controller';

describe('CuentasTitulosController', () => {
  let controller: CuentasTitulosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CuentasTitulosController],
    }).compile();

    controller = module.get<CuentasTitulosController>(CuentasTitulosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
