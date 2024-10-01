import Link from "next/link";
import { HomeIcon, PieChartIcon } from "@radix-ui/react-icons";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <header className="sticky w-full h-14 top-0 backdrop-blur px-20 z-50">
      <div className="flex justify-between items-center h-full">
        <div>
          <Link href={"/"} className="font-bold text-xl">
            DivDash
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex gap-6">
            <Link href={"/"}>
              <HomeIcon width={20} height={20} />
            </Link>
            <Link href={"/"}>
              <PieChartIcon width={20} height={20} />
            </Link>
          </div>
          <ThemeSwitch />
          <div className="size-9 bg-slate-500 rounded-full"></div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
