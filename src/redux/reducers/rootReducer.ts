import { combineReducers } from "@reduxjs/toolkit";
import hymnReducer from "./hymnReducer"
import settingsReducer from "./settingsReducer";
const rootReducer = combineReducers({
    hymnReducer,
    settingsReducer
});

export default rootReducer;
