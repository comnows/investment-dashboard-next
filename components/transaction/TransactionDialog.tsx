"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TransactionForm from "./TransactionForm";

function TransactionDialog() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeDialog = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger className="inline-flex justify-center items-center bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium h-8 rounded-md px-3 text-xs">
        + Transaction
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Add Transaction
          </DialogTitle>
        </DialogHeader>
        <TransactionForm onFormSubmit={closeDialog} />
      </DialogContent>
    </Dialog>
  );
}

export default TransactionDialog;
