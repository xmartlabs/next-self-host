import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';

let client: postgres.Sql | null = null;
let db: PostgresJsDatabase | null = null;

export function getDb() {
  if (!db) {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL environment variable is not set');
    }
    client = postgres(process.env.DATABASE_URL);
    db = drizzle(client);
  }
  return db;
}

export function getClient() {
  if (!client) {
    getDb(); // This will initialize both client and db
  }
  return client!;
}

// For backward compatibility, export db as a getter
export { getDb as db };
