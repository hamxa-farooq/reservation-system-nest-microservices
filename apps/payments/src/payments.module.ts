import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as joi from 'joi';
import { LoggerModule } from '@app/common';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: joi.object({
        PORT: joi.string().required(),
      }),
    }),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService, ConfigService],
})
export class PaymentsModule {}
