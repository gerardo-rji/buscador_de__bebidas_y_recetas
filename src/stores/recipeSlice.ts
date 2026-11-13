import type { StateCreator } from "zustand";
import RecipeService from "../services/RecipeService.ts";
import type {Categories, Drink, Drinks, Recipe, SearchFilter} from "../types";
import type {FavoritesSliceType} from "./favoritesSlice.ts";

export type RecipesSliceType = {
  categories: Categories
  drinks: Drinks
  selectedRecipe: Recipe
  modal: boolean
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilters : SearchFilter) => Promise<void>
  selectRecipe: (id: Drink['idDrink']) => Promise<void>
  closeModal: () => void
}

export const createRecipesSlice : StateCreator<RecipesSliceType & FavoritesSliceType, [], [], RecipesSliceType> = (set) => ({
  categories: {
    drinks: []
  },
  drinks: {
    drinks: []
  },
  selectedRecipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await RecipeService.getCategories()
    set({
      categories
    })
  },
  searchRecipes: async (filters) => {
    const drinks = await RecipeService.getRecipes(filters)
    set({
      drinks
    })
  },
  selectRecipe: async (id) => {
    const selectedRecipe = await RecipeService.getRecipeById(id)
    set({
      selectedRecipe,
      modal: true
    })
  },
  closeModal: () => {
    set({
      modal: false,
      selectedRecipe: {} as Recipe
    })
  }
})