"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import React from "react";
import { Switch } from "../ui/switch";
import { useTheme } from "next-themes";

function ThemeSwitch() {
  const { setTheme } = useTheme();

  const switchHandle = (checked: boolean) => {
    checked ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="flex items-center gap-2">
      <SunIcon />
      <Switch onCheckedChange={switchHandle} />
      <MoonIcon />
    </div>
  );
}

export default ThemeSwitch;
