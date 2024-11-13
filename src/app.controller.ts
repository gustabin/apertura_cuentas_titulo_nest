import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getRoot(): string {
    return 'API de Apertura de Cuentas Títulos está corriendo.';
  }
  getHello(): string {
    return 'Hello World!';
  }
}
