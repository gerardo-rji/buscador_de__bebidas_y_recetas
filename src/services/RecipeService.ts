import axios from 'axios'
import {CategoriesAPIResponseSchema, DrinksResponseSchema} from "../utils/recipes-schema.ts";
import type { SearchFilter } from "../types";

export async function getCategories() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
  const { data } = await axios(url)
  const result = CategoriesAPIResponseSchema.safeParse(data)
  if(result.success) {
    return result.data
  }
}

export async function getRecipes(filter : SearchFilter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filter.category}&i=${filter.ingredient}`
  const { data } = await axios(url)
  const result = DrinksResponseSchema.safeParse(data)
  if(result.success) {
    return result.data
  }
}