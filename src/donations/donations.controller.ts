import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { DonationsService } from './donations.service';
import { PaypalService } from './paypal.service';

@Controller('donations')
export class DonationsController {
  constructor(
    private readonly donationsService: DonationsService,
    private readonly paypalService: PaypalService,
  ) {}

  @Post()
  async donate(
    @Body()
    body: {
      amount: number;
      donorName?: string;
      donorEmail?: string;
      causeId: string;
      orderId: string;
    },
  ) {
    // Capture and verify PayPal payment
    const isValid = await this.donationsService.captureAndVerifyPaypalPayment(
      body.orderId,
    );
    if (!isValid)
      throw new BadRequestException('Invalid or incomplete PayPal payment');
    // Record donation and update cause
    const donation = await this.donationsService.createDonation(body);
    return { success: true, donation };
  }

  @Post('create-paypal-order')
  async createPaypalOrder(
    @Body()
    body: {
      amount: number;
      causeId: string;
      returnUrl: string;
      cancelUrl: string;
    },
  ) {
    const approvalUrl = await this.paypalService.createOrder(
      String(body.amount),
      body.causeId,
      body.returnUrl,
      body.cancelUrl,
    );
    if (!approvalUrl)
      throw new BadRequestException('Could not create PayPal order');
    return { approvalUrl };
  }
}
