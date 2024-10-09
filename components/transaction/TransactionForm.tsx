"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Input } from "../ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";
import { handleTransactionSubmit } from "./action";
import {
  TransactionFormSchema,
  type TTransactionFormSchema,
} from "@/lib/types";

type TransactionFormProps = {
  onFormSubmit: () => void;
};

function TransactionForm({ onFormSubmit }: TransactionFormProps) {
  const form = useForm<TTransactionFormSchema>({
    resolver: zodResolver(TransactionFormSchema),
    defaultValues: {
      type: "buy",
      ticker: "",
      price: "",
      cost: "",
      quantity: "",
      date: new Date(),
    },
  });

  const onSubmit = async (data: TTransactionFormSchema) => {
    await handleTransactionSubmit(data);

    onFormSubmit();
  };

  const handleNumberInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    const newValue = e.target.value
      .replace(/[^0-9.]/g, "")
      .replace(/(\..*)\./g, "$1");

    onChange(newValue);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-3"
      >
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Transaction type</FormLabel>
              <FormControl>
                <Select
                  defaultValue="buy"
                  {...field}
                  value={field.value}
                  onValueChange={field.onChange}
                >
                  <SelectTrigger id="transaction-type">
                    <SelectValue placeholder="Select transaction type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buy">Buy</SelectItem>
                    <SelectItem value="sell">Sell</SelectItem>
                    <SelectItem value="dividend">Dividend</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="ticker"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock ticker</FormLabel>
              <FormControl>
                <Input type="text" placeholder="Ticker" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Stock price</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Price"
                  {...field}
                  onChange={(e) => {
                    handleNumberInputChange(e, field.onChange);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cost"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Trading cost</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Cost"
                  {...field}
                  onChange={(e) => {
                    handleNumberInputChange(e, field.onChange);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Quantity"
                  {...field}
                  onChange={(e) => {
                    handleNumberInputChange(e, field.onChange);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Transaction date</FormLabel>
              <FormControl>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant={"outline"}
                      className={cn(
                        "w-[280px] justify-start text-left font-normal",
                        !field.value && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? (
                        format(field.value, "PPP")
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={{ after: new Date() }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={form.formState.isSubmitting}>
          Add Transaction
        </Button>
      </form>
    </Form>
  );
}

export default TransactionForm;
