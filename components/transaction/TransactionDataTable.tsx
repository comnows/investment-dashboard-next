import React from "react";
import { Input } from "../ui/input";
import {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  DotsVerticalIcon,
  LightningBoltIcon,
  StackIcon,
} from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { type Transaction } from "@/lib/types";
import { format } from "date-fns";
import { HydratedDocument } from "mongoose";

type fetchData = {
  transactions: HydratedDocument<Transaction>[];
};

async function getTransactions() {
  const response = await fetch("http://localhost:3000/api/v1/transactions");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

function groupMonthYear(data: HydratedDocument<Transaction>[]) {
  return data.reduce(
    (acc: Record<string, HydratedDocument<Transaction>[]>, current) => {
      const monthYear = format(current.date, "MMMM yyyy");
      if (!acc[monthYear]) {
        acc[monthYear] = [];
      }
      acc[monthYear].push(current);
      return acc;
    },
    {}
  );
}

async function TransactionDataTable() {
  const data: fetchData = await getTransactions();

  const groupedData = groupMonthYear(data.transactions);

  const transactionType = {
    buy: "Bought",
    sell: "Sold",
    dividend: "Received",
  };

  return (
    <div>
      <div className="flex items-center gap-2">
        <Input placeholder="Stock ticker..." />
        <Dialog>
          <DialogTrigger className="flex justify-center items-center hover:opacity-70 p-2">
            <span className="text-sm">All</span>{" "}
            <ArrowDownIcon className="ml-2" />
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>Filter transactions by:</DialogHeader>
            <div>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="w-full !justify-start gap-4"
              >
                <LightningBoltIcon />
                All
              </Button>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="w-full !justify-start gap-4"
              >
                <ArrowRightIcon />
                Buy
              </Button>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="w-full !justify-start gap-4"
              >
                <ArrowLeftIcon />
                Sell
              </Button>
              <Button
                variant={"ghost"}
                size={"lg"}
                className="w-full !justify-start gap-4"
              >
                <StackIcon />
                Dividend
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        {Object.keys(groupedData).map((monthYear) => (
          <React.Fragment key={monthYear}>
            <div className="font-bold my-4">{monthYear}</div>
            <div className="flex flex-col gap-4">
              {groupedData[monthYear].map((transaction, index) => (
                <div key={transaction.ticker + index} className="flex gap-2">
                  <div className="flex items-center text-sm font-bold">
                    {format(transaction.date, "dd.MM")}
                  </div>
                  <div className="size-12 bg-slate-500 rounded-full"></div>
                  <div className="flex flex-col justify-center flex-1">
                    <h4 className="font-bold">{transaction.ticker}</h4>
                    <p className="text-xs text-gray-500">
                      {transactionType[transaction.type]} x
                      {transaction.quantity}{" "}
                      {transaction.type === "dividend" && "Dividends"} at $
                      {transaction.price}
                    </p>
                  </div>
                  <div className="text-sm">${transaction.cost}</div>
                  <Button
                    variant={"link"}
                    size={"icon"}
                    className="group flex items-center"
                  >
                    <DotsVerticalIcon className="group-hover:opacity-50" />
                  </Button>
                </div>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

export default TransactionDataTable;
