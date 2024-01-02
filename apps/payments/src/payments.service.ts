import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { CreateChargeDto } from '../../../libs/common/src/dto/create-charge.dto';

@Injectable()
export class PaymentsService {
  stripe = new Stripe(this.configService.get('STRIPE_SECRET_KEY'), {
    apiVersion: '2023-10-16',
  });

  async createCharge({ amount }: CreateChargeDto) {
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    });

    return paymentIntent;
  }

  constructor(private readonly configService: ConfigService) {}
}
