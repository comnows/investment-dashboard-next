"use client";

import {
  AccessorKeyColumnDef,
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

type Title = {
  name: string;
  ticker: string;
  share: number;
};

type BuyIn = {
  cost: number;
  costPerShare: number;
};

type Position = {
  price: number;
  pricePerShare: number;
};

type ProfitAndLoss = {
  dollar: number;
  percentage: number;
};

type PositionData = {
  title: Title;
  buyIn: BuyIn;
  position: Position;
  profitAndLoss: ProfitAndLoss;
};

const data: PositionData[] = [
  {
    title: { name: "Nvidia", ticker: "NVDA", share: 1.23 },
    buyIn: { cost: 35.23, costPerShare: 120.23 },
    position: {
      price: 40.79,
      pricePerShare: 123.35,
    },
    profitAndLoss: {
      dollar: 5.56,
      percentage: 2.33,
    },
  },
  {
    title: { name: "Nvidia", ticker: "NVDA", share: 1.23 },
    buyIn: { cost: 35.23, costPerShare: 120.23 },
    position: {
      price: 40.79,
      pricePerShare: 123.35,
    },
    profitAndLoss: {
      dollar: 5.56,
      percentage: 2.33,
    },
  },
  {
    title: { name: "Nvidia", ticker: "NVDA", share: 1.23 },
    buyIn: { cost: 35.23, costPerShare: 120.23 },
    position: {
      price: 40.79,
      pricePerShare: 123.35,
    },
    profitAndLoss: {
      dollar: 5.56,
      percentage: 2.33,
    },
  },
  {
    title: { name: "Nvidia", ticker: "NVDA", share: 1.23 },
    buyIn: { cost: 35.23, costPerShare: 120.23 },
    position: {
      price: 40.79,
      pricePerShare: 123.35,
    },
    profitAndLoss: {
      dollar: 5.56,
      percentage: 2.33,
    },
  },
];

const columnHelper = createColumnHelper<PositionData>();

const columns = [
  columnHelper.accessor("title", {
    header: () => "Title",
    cell: (info) => (
      <div className="flex gap-4">
        <div className="size-12 bg-slate-500 rounded-full"></div>
        <div className="flex flex-col">
          <div className="text-base font-bold">{info.getValue().name}</div>
          <div className="flex items-center gap-4 text-gray-500">
            <div className="uppercase">{info.getValue().ticker}</div>
            <div className="text-xs bg-gray-200 px-2 rounded-full">
              x{info.getValue().share}
            </div>
          </div>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("buyIn", {
    header: () => <div className="text-right">Buy in</div>,
    cell: (info) => (
      <div className="flex flex-col text-right">
        <div className="font-semibold">${info.getValue().cost}</div>
        <div className="text-xs text-gray-500">
          ${info.getValue().costPerShare}
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("position", {
    header: () => <div className="text-right">Position</div>,
    cell: (info) => (
      <div className="flex flex-col text-right">
        <div className="font-semibold">${info.getValue().price}</div>
        <div className="text-xs text-gray-500">
          ${info.getValue().pricePerShare}
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("profitAndLoss", {
    header: () => <div className="text-right">P/L</div>,
    cell: (info) => (
      <div className="flex flex-col text-green-500 text-right">
        <div className="font-semibold">${info.getValue().dollar}</div>
        <div>{info.getValue().percentage}%</div>
      </div>
    ),
  }),
];

function DataTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No result
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
