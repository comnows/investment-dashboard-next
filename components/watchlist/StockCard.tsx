import React from "react";

function StockCard() {
  return (
    <div className="flex items-center gap-3 w-full">
      <div className="size-9 bg-slate-500 rounded-full"></div>
      <div className="flex-1 flex flex-col">
        <h4 className="font-bold">Nvidia</h4>
        <p className="text-gray-500 text-xs">NVDA</p>
      </div>
      <div className="flex flex-col text-right text-green-500">
        <h4 className="font-bold">$123.12</h4>
        <p className="text-xs">+0.87(+1.89%)</p>
      </div>
    </div>
  );
}

export default StockCard;
