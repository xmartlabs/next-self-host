'use server';

import { revalidatePath } from 'next/cache';
import { getDb } from './drizzle';
import { todos } from './schema';
import { eq } from 'drizzle-orm';

export async function addTodoAction(formData: FormData) {
  const content = formData.get('content') as string;
  await getDb().insert(todos).values({ content });
  revalidatePath('/todos');
}

export async function deleteTodoAction(formData: FormData) {
  const id = formData.get('id') as string;
  await getDb().delete(todos).where(eq(todos.id, Number(id)));
  revalidatePath('/todos');
}
