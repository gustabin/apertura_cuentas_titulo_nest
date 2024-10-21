import { Inject, Injectable } from '@nestjs/common';
import { Connection } from 'oracledb';

@Injectable()
export class AppService {
  constructor(
    @Inject('ORACLE_CONNECTION') private readonly connection: Connection,
  ) { }

  async getData() {
    const result = await this.connection.execute(`SELECT * FROM tu_tabla`);
    return result.rows;
  }
}
