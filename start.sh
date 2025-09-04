#!/bin/sh

echo "DB: $DATABASE_URL"
bun add -d dotenv drizzle-orm postgres
bun app/db/migrate.ts
bun run server.js

