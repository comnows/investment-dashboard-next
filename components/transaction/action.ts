"use server";

import { connectMongoDB } from "@/lib/database";
import Asset from "@/lib/models/asset";
import Transaction from "@/lib/models/transaction";
import {
  type Asset as TAsset,
  TransactionFormSchema,
  type TTransactionFormSchema,
} from "@/lib/types";
import { HydratedDocument } from "mongoose";
import { revalidatePath } from "next/cache";

export async function handleTransactionSubmit(data: TTransactionFormSchema) {
  await Promise.all([createTransaction(data), findAndUpdateAsset(data)]);
  console.log("finish submit");

  revalidatePath("/");
}

export async function createTransaction(data: TTransactionFormSchema) {
  const newData = TransactionFormSchema.safeParse(data);

  await connectMongoDB();
  return Transaction.create(newData.data);
}

export async function findAndUpdateAsset(data: TTransactionFormSchema) {
  if (data.type === "dividend") return;

  await connectMongoDB();
  const asset = await Asset.findOne({ ticker: data.ticker }).exec();

  if (!asset) {
    await createAsset(data);
    return;
  }

  let newAsset: Record<string, number>;

  if (data.type === "buy") {
    const totalCost = Number(data.cost) + asset.cost;
    const totalQuantity = Number(data.quantity) + asset.quantity;

    newAsset = {
      quantity: totalQuantity,
      cost: totalCost,
      price: totalCost / totalQuantity,
    };
  } else {
    const totalCost = asset.cost - Number(data.cost);
    const totalQuantity = asset.quantity - Number(data.quantity);

    newAsset = {
      quantity: totalQuantity,
      cost: totalCost,
    };
  }

  await Asset.findOneAndUpdate({ _id: asset._id }, newAsset);
}

async function createAsset(data: TTransactionFormSchema) {
  if (!(data.type === "buy")) return;

  const newAsset: HydratedDocument<TAsset> = new Asset({
    ticker: data.ticker,
    quantity: data.quantity,
    cost: data.cost,
    price: data.price,
  });

  await newAsset.save();
}
