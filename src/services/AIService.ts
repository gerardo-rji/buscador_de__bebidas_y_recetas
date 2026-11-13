import { streamText } from 'ai';
import {openrouter} from "../lib/ai.ts";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter.chat('liquid/lfm-3-1.7b:free'),
      prompt
    })

    return result.textStream
  }
}