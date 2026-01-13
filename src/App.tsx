import { Box } from "@mui/material";
import "./App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
  return (
    <Box className="w-full min-h-screen flex flex-col bg-yellow-100">
      <Box className="fixed top-0 left-0 w-full z-50 bg-white">
        <Header />
      </Box>
      <Box className="h-16" />
      <Box className="flex-1 overflow-y-auto px-2 sm:px-4">
        <Box className="flex justify-center py-4">
          <Card className="w-full max-w-7xl rounded-2xl">
            <CardContent>
              <Dashboard />
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
