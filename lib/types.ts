import { z } from "zod";

export const TransactionFormSchema = z.object({
  type: z.enum(["buy", "sell", "dividend"]),
  ticker: z.string().min(1, "Please provide stock ticker").toUpperCase(),
  price: z
    .union([z.coerce.number().positive(), z.string()])
    .refine((value) => Number(value) > 0, {
      message: "Price must be greater than 0",
    }),
  cost: z
    .union([z.coerce.number().positive(), z.string()])
    .refine((value) => Number(value) > 0, {
      message: "Buying Cost must be greater than 0",
    }),
  quantity: z
    .union([z.coerce.number().positive(), z.string()])
    .refine((value) => Number(value) > 0, {
      message: "Quantity must be greater than 0",
    }),
  date: z.date(),
});

export type TTransactionFormSchema = z.infer<typeof TransactionFormSchema>;

export type Transaction = {
  type: "buy" | "sell" | "dividend";
  ticker: string;
  price: number;
  cost: number;
  quantity: number;
  date: Date;
};

export type Asset = {
  ticker: string;
  quantity: number;
  cost: number;
  price: number;
};
