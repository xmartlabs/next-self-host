import { NextResponse } from 'next/server';
import { getDb } from '@/lib/db/drizzle';
import { todos } from '@/lib/db/schema';
import { revalidatePath } from 'next/cache';

export async function POST() {
  // Clear out the todos for the (public) demo
  // Because you can't trust an open <input> on the internet
  await getDb().delete(todos);
  revalidatePath('/todos');

  return NextResponse.json({ message: 'All todos deleted successfully' });
}
