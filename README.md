# WoodCraft

An editorial luxury furniture-house website for WoodCraft, serving Zimbabwe and international enquiries.

## Stack
- Next.js App Router + TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide icons

## Run locally
```bash
npm install
npm run dev
```

## Before launch
1. Replace the temporary Unsplash photography in `src/data/site.ts` with approved WoodCraft photography.
2. Confirm the company story, workshop details, timber species, sourcing claims and product specifications. The current copy deliberately avoids inventing these facts.
3. Confirm delivery regions, lead times, product availability, prices and quotation terms.
4. Configure the WhatsApp number in `src/lib/site.ts`.
5. Complete EcoCash merchant onboarding and certification before enabling online payments.
6. Confirm PayPal receiving eligibility and Stripe merchant-country eligibility before enabling either provider. Provider adapters are not active and no payment is represented as successful.
7. Add privacy, terms, returns, shipping and warranty policies.
8. Set `NEXT_PUBLIC_SITE_URL` in Vercel.

## Payments
See `docs/payments.md`. Payment processing is intentionally not simulated. No provider is enabled by default; server-side credentials, signed webhooks, idempotency and reconciliation are required before accepting payments.

## Image management
All temporary image URLs and alt text are centralised in `src/data/site.ts`.
