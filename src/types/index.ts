import { z } from "zod";
import {
  CategoriesAPIResponseSchema,
  DrinkResponseSchema,
  DrinksResponseSchema,
  SearchFilterSchema
} from "../utils/recipes-schema.ts";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>
export type SearchFilter = z.infer<typeof SearchFilterSchema>
export type Drinks = z.infer<typeof DrinksResponseSchema>
export type Drink = z.infer<typeof DrinkResponseSchema>