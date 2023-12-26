import { createAction, createReducer } from "@reduxjs/toolkit";
import { HymnBook } from "../../types/hymn";

export interface HymnReducerState {
  currentHymn: HymnBook | null;
}
export const initUserState: HymnReducerState = {
  currentHymn: null,
};
export const saveCurrentHymn = createAction<HymnBook, "saveCurrentHymn">("saveCurrentHymn");

const hymnReducer = createReducer<HymnReducerState>(
  initUserState,
  (builder) => {
    builder.addCase(saveCurrentHymn, (state, action) => {
      state.currentHymn = action.payload;
    });
  },
);

export default hymnReducer;
