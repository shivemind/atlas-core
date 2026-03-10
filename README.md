# AtlasPayments Core

Shared infrastructure for the Atlas payments platform. All other Atlas services depend on this package.

## What's Included

- **Prisma schema** — Core models: Merchant, ApiKey, Customer, Event, AuditLog, Webhook*, Idempotency, Ledger
- **Handler factory** — `createHandler()` with auth, rate limiting, validation, idempotency
- **Auth** — API key authentication (SHA-256 hash lookup)
- **Events** — Domain event emitter with webhook queuing
- **Ledger** — Double-entry bookkeeping engine
- **Webhooks** — HMAC-SHA256 signing, delivery queue, retry processing
- **Rate limiting** — Sliding window (Redis or in-memory fallback)
- **Idempotency** — Request deduplication (Redis + DB)
- **State machine** — Declarative state transition engine
- **Errors** — Typed API error hierarchy
- **Serializers** — Prisma → snake_case response converters

## Setup

```bash
pnpm install
cp .env.example .env   # configure DATABASE_URL
pnpm prisma:migrate:dev
pnpm dev
```

## Ports

Core runs on port 3100.
