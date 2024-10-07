"use server";

import { connectMongoDB } from "@/lib/database";
import Transaction from "@/lib/models/transaction";
import { TransactionFormSchema, TTransactionFormSchema } from "@/lib/types";

export async function createTransaction(data: TTransactionFormSchema) {
  const newData = TransactionFormSchema.safeParse(data);

  console.log(newData);

  // await connectMongoDB();

  // const newTransaction = new Transaction({
  //     type, ticker, price, cost, quantity, date
  // })

  // await newTransaction.save()
}
