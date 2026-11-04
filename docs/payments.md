# WoodCraft payment architecture

## Current state
No payment provider is enabled. The website does not collect card details, create payment sessions, or simulate successful transactions. Bespoke projects require an agreed quotation before any deposit or balance is requested.

## Provider assessment
- **EcoCash:** preferred first integration path for Zimbabwe after merchant onboarding, API access, sandbox testing and production certification with EcoCash.
- **PayPal:** keep disabled until the merchant account is explicitly confirmed as eligible to receive commercial payments in the business's jurisdiction.
- **Stripe:** keep disabled unless the business operates through a legally eligible Stripe-supported country and has an approved merchant account.

Provider availability changes. Reconfirm directly with each provider before implementation.

## Required server-side adapter contract
Implement a common interface with:
- create payment intent/session (server only)
- retrieve provider payment status
- verify signed webhooks
- idempotently record provider events
- reconcile provider transaction reference, order and amount
- issue refunds only where supported and authorised

Never trust a browser redirect as proof of payment. Only a verified provider webhook or server-to-server status check can move an order to paid. Validate currency and amount against the server-side order record. Store secrets only in server environment variables. Never expose credentials to client components.

## Suggested rollout
1. Agree order and deposit workflow, currencies, shipping and tax rules.
2. Complete EcoCash merchant onboarding and obtain sandbox credentials.
3. Implement and test the EcoCash adapter with signed webhook verification and idempotency.
4. Complete production certification before enabling it.
5. Add PayPal/Stripe adapters only after confirming merchant receiving eligibility.
6. Add audit logs, reconciliation, refunds and customer receipts.

Until these steps are complete, use the WhatsApp quotation workflow and arrange payment through a separately confirmed business channel.
