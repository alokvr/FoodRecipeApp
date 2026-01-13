export interface RecipeModel {
  id: number;
  name: string;
  cuisine: string;
  image?: string;
  rating?: number;
  difficulty?: string;
}