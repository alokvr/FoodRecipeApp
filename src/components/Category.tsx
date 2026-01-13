import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import { Stack } from "@mui/material";

interface CategoryList {
  categories: string[];
  handleSelectedCuisine: (item: string) => void;
  selectedCuisineList: string[];
}

const Category: React.FC<CategoryList> = ({
  categories,
  handleSelectedCuisine,
  selectedCuisineList,
}) => {
  return (
    <>
      <h1 className="mb-4">Categories</h1>
      <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
        {categories.map((item) => {
          const isSelected = selectedCuisineList.includes(item);
          return (
            <Chip
              key={item}
              clickable
              avatar={<Avatar>{item[0].toUpperCase()}</Avatar>}
              label={item}
              onClick={() => handleSelectedCuisine(item)}
              sx={{
                bgcolor: isSelected ? "primary.main" : "grey.100",
                color: isSelected ? "primary.contrastText" : "text.primary",
                border: "1px solid",
                borderColor: isSelected ? "primary.main" : "grey.300",
                "&:hover": {
                  bgcolor: isSelected ? "primary.dark" : "grey.200",
                },
                transition: "all 0.2s ease",
              }}
            />
          );
        })}
      </Stack>
    </>
  );
};

export default Category;
