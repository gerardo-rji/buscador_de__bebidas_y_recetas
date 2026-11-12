import type { StateCreator } from "zustand";

export type AiSliceType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}

export const createAiSlice: StateCreator<AiSliceType, [], [], AiSliceType> = () => ({
  recipe: '',
  generateRecipe: async (prompt) => {
    console.log(prompt)
  }
})