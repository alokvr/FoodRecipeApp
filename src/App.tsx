import { Box } from "@mui/material";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dashboard from "./components/Dashboard";
import { ThemeContext } from "./contexts/themeContext";
import { useState } from "react";
import type { IAppTheme } from "./models/AppTheme";
import Header from "./components/Header";

function App() {
  const [theme, setTheme] = useState("light");
  const AppStyle: IAppTheme = {
    dark: {
      backgroundColor: "#36454F",
      color: "white",
    },
    light: {
      backgroundColor: "white",
      color: "black",
    },
    common: {
      transition: "all 1s ease",
    },
  };

  const themeStyle = {
    ...AppStyle.common,
    ...(theme == "light" ? AppStyle.light : AppStyle.dark),
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Box className="w-full h-screen flex flex-col overflow-hidden">
          <Box className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-900">
            <Header />
          </Box>
          <Box className="h-18" />
          <Box className="flex-1 overflow-y-auto overflow-x-hidden">
            <Box className="flex justify-center items-center min-h-full p-4">
              <Card
                className="w-[95%] min-h-[95%] rounded-[25px]!"
                style={themeStyle}
              >
                <CardContent className="h-full">
                  <Dashboard />
                </CardContent>
              </Card>
            </Box>
          </Box>
        </Box>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
