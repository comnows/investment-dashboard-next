import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TransactionForm from "./TransactionForm";

function TransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex justify-center items-center bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium h-8 rounded-md px-3 text-xs">
        + Transaction
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add Transaction
          </DialogTitle>
        </DialogHeader>
        <TransactionForm />
      </DialogContent>
    </Dialog>
  );
}

export default TransactionDialog;
