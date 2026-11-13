import api from "../lib/axios.ts";
import {CategoriesAPIResponseSchema, DrinksResponseSchema, RecipeAPIResponseSchema} from "../utils/recipes-schema.ts";
import type {Drink, SearchFilter} from "../types";

export default {
  async getCategories() {
    const url = '/list.php?c=list'
    const { data } = await api(url)
    const result = CategoriesAPIResponseSchema.safeParse(data)
    if (result.success) {
      return result.data
    }
  },

  async getRecipes(filter: SearchFilter) {
    const url = `/filter.php?c=${filter.category}&i=${filter.ingredient}`
    const {data} = await api(url)
    const result = DrinksResponseSchema.safeParse(data)
    if (result.success) {
      return result.data
    }
  },

  async getRecipeById(id: Drink['idDrink']) {
    const url = `/lookup.php?i=${id}`
    const {data} = await api(url)
    const result = RecipeAPIResponseSchema.safeParse(data.drinks[0])
    if (result.success) {
      return result.data
    }
  }
}