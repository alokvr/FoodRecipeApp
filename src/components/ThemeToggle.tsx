import { Switch } from "@mui/material";
import { ThemeContext } from "../contexts/themeContext";
import { useContext } from "react";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-medium">
        Theme: {theme.charAt(0).toUpperCase() + theme.slice(1)}
      </span>
      <Switch checked={theme === "dark"} onChange={handleThemeToggle} />
    </div>
  );
};

export default ThemeToggle;
