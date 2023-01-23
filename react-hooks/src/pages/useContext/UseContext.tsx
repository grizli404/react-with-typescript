import { createContext, useContext, useState } from "react";
import { FunctionContextComponent } from "./FunctionContextComponent";
import { ThemeProvider, useTheme } from "./ThemeContext";

export function UseContext() {
  const { setContext } = useTheme();
  return (
    <ThemeProvider>
      <FunctionContextComponent />
    </ThemeProvider>
  );
}
