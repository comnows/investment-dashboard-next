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

function TransactionDataTable() {
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
        <div className="font-bold my-4">September 2024</div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex items-center text-sm font-bold">26.09</div>
            <div className="size-12 bg-slate-500 rounded-full"></div>
            <div className="flex flex-col justify-center flex-1">
              <h4 className="font-bold">Nvidia</h4>
              <p className="text-xs text-gray-500">Bought x0.0455 at $120.23</p>
            </div>
            <div className="text-sm">$32.15</div>
            <Button
              variant={"link"}
              size={"icon"}
              className="group flex items-center"
            >
              <DotsVerticalIcon className="group-hover:opacity-50" />
            </Button>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center text-sm font-bold">26.09</div>
            <div className="size-12 bg-slate-500 rounded-full"></div>
            <div className="flex flex-col justify-center flex-1">
              <h4 className="font-bold">Nvidia</h4>
              <p className="text-xs text-gray-500">Bought x0.0455 at $120.23</p>
            </div>
            <div className="text-sm">$32.15</div>
            <Button
              variant={"link"}
              size={"icon"}
              className="group flex items-center"
            >
              <DotsVerticalIcon className="group-hover:opacity-50" />
            </Button>
          </div>
        </div>
        <div className="font-bold my-4">September 2024</div>
        <div className="flex flex-col gap-4">
          <div className="flex gap-2">
            <div className="flex items-center text-sm font-bold">26.09</div>
            <div className="size-12 bg-slate-500 rounded-full"></div>
            <div className="flex flex-col justify-center flex-1">
              <h4 className="font-bold">Nvidia</h4>
              <p className="text-xs text-gray-500">Bought x0.0455 at $120.23</p>
            </div>
            <div className="text-sm">$32.15</div>
            <Button
              variant={"link"}
              size={"icon"}
              className="group flex items-center"
            >
              <DotsVerticalIcon className="group-hover:opacity-50" />
            </Button>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center text-sm font-bold">26.09</div>
            <div className="size-12 bg-slate-500 rounded-full"></div>
            <div className="flex flex-col justify-center flex-1">
              <h4 className="font-bold">Nvidia</h4>
              <p className="text-xs text-gray-500">Bought x0.0455 at $120.23</p>
            </div>
            <div className="text-sm">$32.15</div>
            <Button
              variant={"link"}
              size={"icon"}
              className="group flex items-center"
            >
              <DotsVerticalIcon className="group-hover:opacity-50" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TransactionDataTable;
