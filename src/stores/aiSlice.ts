import type { StateCreator } from "zustand";
import AIService from "../services/AIService.ts";

export type AiSliceType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}

export const createAiSlice: StateCreator<AiSliceType, [], [], AiSliceType> = (set) => ({
  recipe: '',
  generateRecipe: async (prompt) => {
    const data = await AIService.generateRecipe(prompt)

    for await (const textPart of data) {
      set(state => ({
        recipe: state.recipe + textPart
      }))
    }
  }
})