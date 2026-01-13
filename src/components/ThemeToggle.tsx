import { Switch } from "@mui/material";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const handleThemeToggle = () => {
    setTheme(theme == "light" ? "dark" : "light");
  };
  return (
    <>
      <span>Theme : [{theme.charAt(0).toUpperCase() + theme.slice(1)}]</span>
      <Switch onChange={handleThemeToggle} />
    </>
  );
};

export default ThemeToggle;
