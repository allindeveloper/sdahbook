import { createAction, createReducer } from "@reduxjs/toolkit";
import { FontSizes } from "../../types/settings";

export interface SettingsReducerState {
  currentFont: FontSizes
}
export const initUserState: SettingsReducerState = {
  currentFont: FontSizes.Medium,
};

export const setCurrentFont = createAction<FontSizes, "setCurrentFont">("setCurrentFont");


const settingsReducer = createReducer<SettingsReducerState>(
  initUserState,
  (builder) => {
    builder.addCase(setCurrentFont, (state, action) => {
      state.currentFont = action.payload;
    });
  },
);

export default settingsReducer;
