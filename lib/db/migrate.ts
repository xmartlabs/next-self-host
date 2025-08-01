import dotenv from 'dotenv';
import path from 'path';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import { getClient, getDb } from './drizzle';

dotenv.config();

async function main() {
  await migrate(getDb(), {
    migrationsFolder: path.join(process.cwd(), './lib/db/migrations'),
  });
  console.log(`Migrations complete`);
  await getClient().end();
}

main();
