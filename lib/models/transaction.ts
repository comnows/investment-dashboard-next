import { Model, model, Schema } from "mongoose";
import { type Transaction as TTransaction } from "../types";

type transactionModel = Model<TTransaction>;

const transactionSchema = new Schema<TTransaction, transactionModel>({
  type: {
    type: String,
    enum: ["buy", "sell", "dividend"],
    default: "buy",
  },
  ticker: {
    type: String,
    require: [true, "Please provide ticker"],
  },
  price: {
    type: Number,
    require: [true, "Please provide price"],
  },
  cost: {
    type: Number,
    require: [true, "Please provide cost"],
  },
  quantity: {
    type: Number,
    require: [true, "Please provide quantity"],
  },
  date: {
    type: Date,
    require: [true, "Please provide transaction date"],
  },
});

const Transaction = model<TTransaction, transactionModel>(
  "Transaction",
  transactionSchema
);

export default Transaction;
