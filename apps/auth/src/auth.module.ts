import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from './user/user.module';
import { LoggerModule } from '@app/common';
import { ConfigModule } from '@nestjs/config';
import * as joi from 'joi';

@Module({
  imports: [
    UserModule,
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        MONGODB_URI: joi.string().required(),
        JWT_SECRET: joi.string().required(),
        JWT_EXPIRY: joi.string().required(),
        PORT: joi.number().required(),
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
