import type { PaymentProvider } from "./types";

/**
 * Deliberately disabled until merchant onboarding, credentials, webhook
 * verification and production certification are complete.
 * Never infer payment success from a browser redirect.
 */
export const paymentProviderStatus: Record<PaymentProvider, "disabled" | "ready"> = {
  ecocash: "disabled",
  paypal: "disabled",
  stripe: "disabled"
};

export function isPaymentProviderReady(provider: PaymentProvider) {
  return paymentProviderStatus[provider] === "ready";
}