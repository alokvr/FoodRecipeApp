import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

interface searchModel {
  searchText: string;
  onSearchChange: (value: string) => void;
}

const Search: React.FC<searchModel> = ({ searchText, onSearchChange }) => {
  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      className="flex items-center gap-3"
    >
      <TextField
        value={searchText}
        size="small"
        id="searchbox"
        placeholder="Search Recipe"
        variant="outlined"
        className="w-96"
        onChange={(e) => onSearchChange(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: "25px",
            background: "#eee",
          },
        }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </Box>
  );
};
export default Search;
