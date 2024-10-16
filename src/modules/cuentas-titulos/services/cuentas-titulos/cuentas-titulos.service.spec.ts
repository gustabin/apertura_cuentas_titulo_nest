import { Test, TestingModule } from '@nestjs/testing';
import { CuentasTitulosService } from './cuentas-titulos.service';

describe('CuentasTitulosService', () => {
  let service: CuentasTitulosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CuentasTitulosService],
    }).compile();

    service = module.get<CuentasTitulosService>(CuentasTitulosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
