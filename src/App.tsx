import { Box } from "@mui/material";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Box className="w-full h-screen flex flex-col overflow-hidden">
        <Box className="fixed top-0 left-0 w-full">
          <Header />
        </Box>
        <Box className="h-18" />
        <Box className="flex-1 overflow-y-auto overflow-x-hidden">
          <Box className="flex justify-center items-center min-h-full p-4">
            <Card className="w-[95%] min-h-[95%] rounded-[25px]!">
              <CardContent className="h-full">
                <Dashboard />
              </CardContent>
            </Card>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default App;
