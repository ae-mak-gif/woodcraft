export type PaymentProvider = "ecocash" | "paypal" | "stripe";

export interface PaymentRequest {
  orderId: string;
  amountMinor: number;
  currency: string;
  customerEmail?: string;
  returnUrl: string;
  cancelUrl: string;
}

export interface PaymentSession {
  provider: PaymentProvider;
  providerReference: string;
  checkoutUrl: string;
  expiresAt?: string;
}

export interface PaymentAdapter {
  readonly provider: PaymentProvider;
  createCheckout(request: PaymentRequest): Promise<PaymentSession>;
  verifyWebhook(payload: string, signature: string): Promise<boolean>;
  getPaymentStatus(providerReference: string): Promise<"pending" | "paid" | "failed" | "refunded">;
}