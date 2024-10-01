import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "../ui/dialog";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { DashIcon } from "@radix-ui/react-icons";

function WatchlistDialog() {
  return (
    <Dialog>
      <DialogTrigger className="inline-flex justify-center items-center bg-primary text-primary-foreground shadow hover:bg-primary/90 font-medium h-8 rounded-md px-3 text-xs">
        + Watchlist
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="text-xl font-bold">Add Watchlist</DialogHeader>
        <div>
          <Input placeholder="Search" />
          <ScrollArea className="h-[300px] mt-5 p-4">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
              <div className="flex justify-center items-center gap-3">
                <div className="size-9 bg-slate-500 rounded-full"></div>
                <div className="flex-1 flex flex-col">
                  <h4 className="font-bold">Nvidia</h4>
                  <p className="text-gray-500 text-xs">NVDA</p>
                </div>
                <Button
                  variant={"destructive"}
                  size={"icon"}
                  className="rounded-full !size-4"
                >
                  <DashIcon />
                </Button>
              </div>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default WatchlistDialog;
