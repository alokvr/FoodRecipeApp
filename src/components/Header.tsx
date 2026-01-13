import { useContext } from "react";
import { ThemeContext } from "../contexts/themeContext";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { theme } = useContext(ThemeContext);

  const headerStyle =
    theme === "dark"
      ? {
          backgroundColor: "#1f2937", // dark gray
          color: "#f9fafb",
          borderBottom: "1px solid #374151",
        }
      : {
          backgroundColor: "#ffffff",
          color: "#111827",
          borderBottom: "1px solid #e5e7eb",
        };

  return (
    <header
      style={headerStyle}
      className="h-18 px-3 flex items-center justify-between shadow-sm"
    >
      <h1 className="text-xl font-semibold">My Food Recipes</h1>
      <ThemeToggle />
    </header>
  );
};

export default Header;
