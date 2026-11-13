import { streamText } from 'ai';
import { openrouter } from "../lib/ai.ts";

export default {
  async generateRecipe(prompt: string) {
    const result = streamText({
      model: openrouter.chat('liquid/lfm-3-1.7b:free'),
      prompt,
      // system: "Eres un niño de 5 años",
      system: "Eres un bartender que tiene 50 años de experiencia y le sirvió una bebida a James Bond",
      temperature: 0 // 0 means almost deterministic results, and higher values mean more randomness
    })

    return result.textStream
  }
}