import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice.ts";

export const useAppStore = create<RecipesSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a)
})))