import { createAction, createReducer } from "@reduxjs/toolkit";
import { HymnBook } from "../../types/hymn";

export interface HymnReducerState {
  currentHymn: HymnBook | null;
  offlineHymn: HymnBook[];
}
export const initUserState: HymnReducerState = {
  currentHymn: null,
  offlineHymn: []
};
export const saveCurrentHymn = createAction<HymnBook, "saveCurrentHymn">("saveCurrentHymn");

export const saveOfflineHymn = createAction<HymnBook[], "saveOfflineHymn">("saveOfflineHymn");


const hymnReducer = createReducer<HymnReducerState>(
  initUserState,
  (builder) => {
    builder.addCase(saveCurrentHymn, (state, action) => {
      state.currentHymn = action.payload;
    });
    builder.addCase(saveOfflineHymn, (state, action) => {
      state.offlineHymn = action.payload;
    });
  },
);

export default hymnReducer;
