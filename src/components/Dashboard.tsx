import Search from "./Search";
import { Grid } from "@mui/material";
import Category from "./Category";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";
import type { RecipeModel } from "../models/RecipeModel";
import Recipe from "./Recipe";
import useDebounce from "../hooks/useDebounce";

function Dashboard() {
  const [recipes, setRecipes] = useState<RecipeModel[]>([]);
  const [cuisines, setCuisines] = useState<string[]>([]);
  const [selectedCuisines, setSelectedCuisine] = useState<string[]>([]);
  const [searchTxt, setSearchTxt] = useState<string>("");
  const debouncedSText = useDebounce(searchTxt, 500);

  const handleSelectedCuisine = (item: string) => {
    setSelectedCuisine((prev) =>
      prev.includes(item)
        ? prev.filter((cuisine) => cuisine !== item)
        : [...prev, item]
    );
  };

  useEffect(() => {
    const getRecipes = () => {
      try {
        axios.get("https://dummyjson.com/recipes").then((res) => {
          const recipeList = res.data?.recipes;
          setRecipes(recipeList);
          const cuisineList: string[] = recipeList.map((item: RecipeModel) => {
            return item?.cuisine;
          });
          const uniqueCuisine = [...new Set(cuisineList)];
          setCuisines(uniqueCuisine);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getRecipes();
  }, []);

  const filteredRecipes = useMemo(() => {
    let result = recipes;
    // filter by cuisine
    if (selectedCuisines.length > 0) {
      result = result.filter((item) => selectedCuisines.includes(item.cuisine));
    }
    // filter by search text
    if (debouncedSText.trim()) {
      result = result.filter((item) =>
        item.name.toLowerCase().includes(debouncedSText.toLowerCase())
      );
    }
    return result;
  }, [recipes, selectedCuisines, debouncedSText]);

  return (
    <>
      <Grid container spacing={2}>
        <Grid container size={12} spacing={2} direction="column">
          <Search searchText={searchTxt} onSearchChange={setSearchTxt} />
          <Grid>
            <Category
              categories={cuisines}
              handleSelectedCuisine={handleSelectedCuisine}
              selectedCuisineList={selectedCuisines}
            />
          </Grid>
          <Grid>
            <Recipe recipes={filteredRecipes} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Dashboard;
