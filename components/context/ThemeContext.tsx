"use client";

import { ThemeProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

function ThemeContextProvider({ children, ...props }: ThemeProviderProps) {
  return <ThemeProvider {...props}>{children}</ThemeProvider>;
}

export default ThemeContextProvider;
