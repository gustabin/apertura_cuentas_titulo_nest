import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './modules/auth/auth.service';
import { AuthController } from './modules/auth/auth.controller';
import { JwtStrategy } from './modules/auth/jwt.strategy';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CuentasTitulosModule } from './modules/cuentas-titulos/cuentas-titulos.module';
import { MockDataModule } from './modules/mock-data/mock-data.module';
import { EnriModule } from './modules/enri/enri.module';
import { JobsModule } from './modules/jobs/jobs.module';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { JwtDecodeModule } from './modules/jwt-decode/jwt-decode.module';


@Module({
  // imports: [
  //   TypeOrmModule.forRoot(),
  //   CuentasTitulosModule,
  //   EnriModule,
  //   JobsModule,
  // ],
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'data/db.sqlite',  // La ruta de tu base de datos SQLite
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,  // Sincronizar el esquema automáticamente
    }),
    CuentasTitulosModule,
    EnriModule,
    JobsModule,
    MockDataModule,
    AuthModule,
    JwtDecodeModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'your-secret-key', // Cambia esta clave secreta por una real
      signOptions: { expiresIn: '1h' },
    }),
  ],
  controllers: [AppController, AuthController],
  providers: [AuthService, JwtStrategy],
})
export class AppModule { }
