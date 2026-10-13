# Zam Models and Signatures

A React + Vite public site and Express API for Zam Models and Signatures. The API uses TypeScript, Prisma and MySQL. Its files keep endpoint wiring in `apps/api/src/routes`, HTTP/business handling in `apps/api/src/controllers`, and database operations in `apps/api/src/models`.

## Requirements

- Node.js 20 or later and npm
- MySQL 8.0 or compatible MySQL server

## Local setup

1. Create a MySQL database and local environment file:

   ```sh
   cp .env.example .env
   ```

2. Set `DATABASE_URL` in `.env` to the database credentials for your local MySQL server. Keep `.env` private.
3. Install dependencies and generate Prisma Client:

   ```sh
   npm install
   npm run db:generate
   ```

4. Apply the MySQL migrations and insert/update the categories plus a clearly marked sample event:

   ```sh
   npm run db:migrate
   npm run db:seed
   ```

5. Start the frontend and API together:

   ```sh
   npm run dev
   ```

   Web: http://localhost:5173  
   API health: http://localhost:4000/api/health

## Production build

```sh
npm run typecheck
npm run build
```

Deploy the generated `apps/web/dist` using a static host and run `apps/api/dist/server.js` behind HTTPS. Set `VITE_API_URL`, `WEB_ORIGIN`, `DATABASE_URL` and `UPLOAD_DIR` for the deployment. Ensure the upload directory is on durable private storage with backups, and consider replacing local disk uploads with an object-storage provider before horizontal scaling. Configure reverse-proxy limits, TLS, database backups and monitoring in the hosting environment.

## API

- `GET /api/health` — liveness check
- `GET /api/categories` — audition category list
- `GET /api/events` — event listings
- `POST /api/registrations` — multipart form (`fullName`, `email`, `phone`, `location` as `LAGOS` or `AWKA`, `categoryId`, `bio`, optional `image`)
- `POST /api/inquiries` — JSON contact form (`fullName`, `email`, optional `phone`, `subject`, `message`)

Images accept JPEG, PNG and WEBP up to the configured `MAX_UPLOAD_MB`. Validation and request-rate limiting are applied by the API. Review your retention, consent, privacy notice and data access policies before collecting real applicant information.

## Content and brand details

The supplied files in `images/` are copied into `apps/web/public/images/` and used in the interface. The migration seeds the six requested talent categories. `npm run db:seed` adds one future-dated event for development; the event is flagged `isSample` and its text explicitly says it is illustrative. Replace it with a confirmed programme before going live. Exact street addresses, phone number, official email, and verified sponsor names were not included in the supplied brief, so the site does not invent them. Update the corresponding content in the footer/contact pages when verified details are available.
