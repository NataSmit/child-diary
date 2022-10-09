import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { measureSlice } from "./measureSlice";
import { vaccinationSlice } from "./vaccinationSlice";
import { eventsSlice } from "./eventsSlice";
import { illnessSlice } from "./illnessSlice"

const rootReducer = combineReducers({
  measureSlice: measureSlice.reducer,
  vaccinationSlice: vaccinationSlice.reducer,
  eventsSlice: eventsSlice.reducer,
  illnessSlice: illnessSlice.reducer
});

export const store = configureStore({
  reducer: rootReducer,
});
