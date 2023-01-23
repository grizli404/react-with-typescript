import { useContext, useState, createContext, ReactNode } from "react";
import { UseContext } from "./UseContext";

type ThemeProviderProps = {
  children: ReactNode;
};
type ThemeContextType = {
  currentContext: boolean;
  setContext: () => void;
};

const ThemeContext = createContext({} as ThemeContextType);

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [darkTheme, setDarkTheme] = useState<boolean>(true);
  function setContext() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  const currentContext = darkTheme;

  return (
    <ThemeContext.Provider value={{ currentContext, setContext }}>
      <button onClick={setContext}>Toggle Theme</button>
      {children}
    </ThemeContext.Provider>
  );
}
