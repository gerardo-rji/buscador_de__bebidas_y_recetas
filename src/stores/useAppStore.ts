import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice.ts";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice.ts";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
})))

//  Slice Pattern