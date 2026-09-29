# Ele's Hub

Next.js + TypeScript + Tailwind CSS storefront for Ele's Hub — deadstock sneakers, slides and streetwear, with a WhatsApp-first ordering flow.

## Run locally

```bash
cp .env.example .env.local   # then adjust values
npm install
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL used for canonical/Open Graph metadata |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Business WhatsApp number that receives orders (international format, no `+`) |

Both are inlined into the client bundle at build time, so they must be present when you run `next build` (or `docker build`).

## Run with Docker

The image is a multi-stage build on `node:22-alpine` that runs Next's standalone server as a non-root user.

```bash
# build + run (reads build args from .env.local)
docker compose --env-file .env.local up --build

# or without Compose
docker build \
  --build-arg NEXT_PUBLIC_SITE_URL=https://elefashionhub.com \
  --build-arg NEXT_PUBLIC_WHATSAPP_NUMBER=2349167593804 \
  -t ele-fashion-hub .
docker run --rm -p 3000:3000 ele-fashion-hub
```

Open http://localhost:3000. The container exposes port `3000` and includes a healthcheck on `/`.

## How ordering works

There is no payment gateway. The customer builds a bag, enters name/phone/delivery details at checkout, and the site opens WhatsApp with a fully formatted order message addressed to the business number. Availability, delivery fee and payment are then confirmed in the chat. Single-item "Order on WhatsApp" links are also available on every product page.

The message format and `wa.me` link generation live in `lib/whatsapp.ts`; swapping in the WhatsApp Business API later means replacing `buildWhatsAppUrl`.

## Included

- Homepage with real product photography and video showcase
- Shop with URL-driven category filter, search and sort
- Product pages with image/video gallery, sizes, colours, breadcrumbs
- Wishlist and cart persisted in `localStorage`
- WhatsApp checkout with order preview
- About, Contact and FAQ pages
- Favicon, Apple touch icon and Open Graph image generated from the brand mark

## Catalog

Products are defined in `data/products.ts`; images and clips live in `public/`.
