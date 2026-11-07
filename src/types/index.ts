import { z } from "zod";
import { CategoriesAPIResponseSchema } from "../utils/recipes-schema.ts";

export type Categories = z.infer<typeof CategoriesAPIResponseSchema>