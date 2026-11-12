import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { createRecipesSlice, type RecipesSliceType } from "./recipeSlice.ts";
import { createFavoritesSlice, type FavoritesSliceType } from "./favoritesSlice.ts";
import { createNotificationSlice, type NotificationSliceType } from "./notificationSlice.ts";
import { createAiSlice, type AiSliceType } from "./aiSlice.ts";

export const useAppStore = create<RecipesSliceType & FavoritesSliceType & NotificationSliceType & AiSliceType>()(devtools((...a) => ({
  ...createRecipesSlice(...a),
  ...createFavoritesSlice(...a),
  ...createNotificationSlice(...a),
  ...createAiSlice(...a)
})))

//  Slice Pattern