import { createAction, createReducer } from "@reduxjs/toolkit";
import { FontSizes } from "../../types/settings";
import { Language } from "../../constants/locale";

export interface SettingsReducerState {
  currentFont: FontSizes
  language: Language;
}
export const initUserState: SettingsReducerState = {
  currentFont: FontSizes.Medium,
  language: Language.English
};

export const setCurrentFont = createAction<FontSizes, "setCurrentFont">("setCurrentFont");
export const setLanguage = createAction<Language, "setLanguage">("setLanguage");


const settingsReducer = createReducer<SettingsReducerState>(
  initUserState,
  (builder) => {
    builder.addCase(setCurrentFont, (state, action) => {
      state.currentFont = action.payload;
    });
    builder.addCase(setLanguage, (state, action) => {
      state.language = action.payload;
    });
  },
);

export default settingsReducer;
