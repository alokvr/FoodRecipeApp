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
  Stack,
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
      <h1 className="mb-4">All Recipes</h1>
      <Box
        sx={{
          height: "60vh",
          overflowY: "auto",
          paddingRight: 1,
          "&::-webkit-scrollbar": { width: "0.4em" },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#ccc",
            borderRadius: "10px",
          },
        }}
      >
        <Stack direction="row" spacing={2} flexWrap="wrap" useFlexGap>
          {recipes &&
            recipes.map((item) => (
              <Card
                key={item.id}
                sx={{
                  width: 200,
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "20px",
                  background: "#dde",
                }}
              >
                <CardActionArea
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100"
                    image={item?.image}
                    alt={item?.name}
                    sx={{ width: "100%" }}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    {" "}
                    <Typography gutterBottom variant="body2" component="div">
                      {item?.name}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="body2"
                      component="div"
                      fontSize={12}
                      fontWeight={600}
                    >
                      {item?.cuisine}
                    </Typography>{" "}
                  </CardContent>
                </CardActionArea>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item?.rating}
                    precision={0.1}
                    readOnly
                  />
                  {item?.difficulty == "Easy" ? (
                    <SentimentVerySatisfiedIcon style={{ color: "green" }} />
                  ) : (
                    <SentimentSatisfiedAltIcon style={{ color: "red" }} />
                  )}
                </CardActions>
              </Card>
            ))}
        </Stack>
      </Box>
    </>
  );
};

export default Recipe;
