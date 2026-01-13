import React from "react";
import type { RecipeModel } from "../models/RecipeModel";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Rating,
  CardActionArea,
  CardActions,
  Box,
} from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";

interface RecipeList {
  recipes: RecipeModel[];
}

const Recipe: React.FC<RecipeList> = ({ recipes }) => {
  return (
    <>
      <h1 className="mb-4 text-base sm:text-lg font-semibold">All Recipes</h1>

      <Box className="max-h-[65vh] overflow-y-auto pr-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {recipes.map((item) => (
            <Card
              key={item.id}
              sx={{
                borderRadius: "20px",
                background: "#dde",
                height: "100%",
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="120"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent>
                  <Typography variant="body2" fontWeight={600}>
                    {item.name}
                  </Typography>
                  <Typography fontSize={12}>{item.cuisine}</Typography>
                </CardContent>
              </CardActionArea>

              <CardActions sx={{ justifyContent: "space-between" }}>
                <Rating value={item.rating} precision={0.1} readOnly />
                {item.difficulty === "Easy" ? (
                  <SentimentVerySatisfiedIcon color="success" />
                ) : (
                  <SentimentSatisfiedAltIcon color="error" />
                )}
              </CardActions>
            </Card>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Recipe;
