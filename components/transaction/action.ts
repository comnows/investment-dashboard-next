"use server";

import { connectMongoDB } from "@/lib/database";
import Transaction from "@/lib/models/transaction";
import { TransactionFormSchema, TTransactionFormSchema } from "@/lib/types";
import { revalidatePath } from "next/cache";

export async function createTransaction(data: TTransactionFormSchema) {
  const newData = TransactionFormSchema.safeParse(data);

  await connectMongoDB();
  await Transaction.create(newData.data);

  revalidatePath("/");
}
