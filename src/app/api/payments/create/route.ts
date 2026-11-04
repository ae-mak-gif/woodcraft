import { NextResponse } from "next/server";
import type { PaymentProvider } from "@/lib/payments/types";
import { isPaymentProviderReady } from "@/lib/payments/registry";

const providers: PaymentProvider[] = ["ecocash", "paypal", "stripe"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const provider = body?.provider;

  if (!providers.includes(provider)) {
    return NextResponse.json({ error: "Choose a supported payment provider." }, { status: 400 });
  }

  if (!isPaymentProviderReady(provider)) {
    return NextResponse.json(
      {
        error: "Online payments are not enabled yet.",
        provider,
        nextStep: "Contact WoodCraft to confirm your quotation and payment arrangements."
      },
      { status: 503 }
    );
  }

  // A provider adapter must be implemented and enabled only after merchant
  // credentials, signed webhooks, idempotency and reconciliation are tested.
  return NextResponse.json({ error: "Payment adapter is not available." }, { status: 503 });
}