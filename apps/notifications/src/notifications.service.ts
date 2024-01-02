import { Injectable } from '@nestjs/common';
import { NotifyEmailDto } from './dto/notify-email.dto';

@Injectable()
export class NotificationsService {
  async sendEmail({ email }: NotifyEmailDto) {
    console.log(email);
  }
}
