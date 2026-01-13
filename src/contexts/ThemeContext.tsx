import { createContext } from "react";
interface Itheme {
  theme: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setTheme: any;
}

export const ThemeContext = createContext({} as Itheme);
