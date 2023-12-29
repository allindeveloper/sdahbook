import { createAction, createReducer } from "@reduxjs/toolkit";
import { HymnBook } from "../../types/hymn";

export interface HymnReducerState {
  currentHymn: HymnBook | null;
  offlineHymn: HymnBook[];
  showHymnSearchDialog: boolean;
}
export const initUserState: HymnReducerState = {
  currentHymn: null,
  offlineHymn: [],
  showHymnSearchDialog: false
};
export const saveCurrentHymn = createAction<HymnBook, "saveCurrentHymn">("saveCurrentHymn");

export const saveOfflineHymn = createAction<HymnBook[], "saveOfflineHymn">("saveOfflineHymn");

export const toggleHymnSearchDialog = createAction<boolean, "toggleHymnSearchDialog">("toggleHymnSearchDialog");


const hymnReducer = createReducer<HymnReducerState>(
  initUserState,
  (builder) => {
    builder.addCase(saveCurrentHymn, (state, action) => {
      state.currentHymn = action.payload;
    });
    builder.addCase(saveOfflineHymn, (state, action) => {
      state.offlineHymn = action.payload;
    });
    builder.addCase(toggleHymnSearchDialog, (state, action) => {
      state.showHymnSearchDialog = action.payload;
    });
  },
);

export default hymnReducer;
