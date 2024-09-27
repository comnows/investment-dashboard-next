import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { DatePicker } from "../ui/DatePicker";
import { Button } from "../ui/button";

function TransactionDialog() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex justify-center items-center bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium h-8 rounded-md px-3 text-xs">
        + Transaction
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-xl font-bold">
          Add Transaction
        </DialogHeader>
        <div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="transaction-type">Transaction type</Label>
            <Select>
              <SelectTrigger id="transaction-type">
                <SelectValue placeholder="Select transaction type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="buy">Buy</SelectItem>
                <SelectItem value="sell">Sell</SelectItem>
                <SelectItem value="dividend">Dividend</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex flex-col gap-2 my-5">
            <Label>Stock ticker</Label>
            <Input type="text" placeholder="Ticker" />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <Label>Stock price</Label>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="Price"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <Label>Tranding cost</Label>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="Cost"
            />
          </div>
          <div className="flex flex-col gap-2 my-5">
            <Label>Quantity</Label>
            <Input
              type="number"
              inputMode="numeric"
              min={0}
              placeholder="Quantity"
            />
          </div>
          <div className="flex flex-col gap-2 mt-5">
            <Label>Transaction date</Label>
            <DatePicker />
          </div>
        </div>
        <DialogFooter>
          <Button className="w-full">Add Transaction</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default TransactionDialog;
