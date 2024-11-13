import { Test, TestingModule } from '@nestjs/testing';
import { CuentasTitulosService } from './cuentas-titulos.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CuentaTitulo } from '../../entities/cuenta-titulo.entity';
import { Repository } from 'typeorm';

describe('CuentasTitulosService', () => {
  let service: CuentasTitulosService;
  let repository: Repository<CuentaTitulo>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CuentasTitulosService,
        {
          provide: getRepositoryToken(CuentaTitulo),
          useClass: Repository, // Usa Repository como mock
        },
      ],
    }).compile();

    service = module.get<CuentasTitulosService>(CuentasTitulosService);
    repository = module.get<Repository<CuentaTitulo>>(getRepositoryToken(CuentaTitulo));
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Agrega más pruebas aquí según sea necesario
});
