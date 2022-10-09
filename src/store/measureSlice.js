import { createSlice } from "@reduxjs/toolkit";

export const measureSlice = createSlice({
  name: "toolkit",
  initialState: {
    measures: [],
  },
  reducers: {
    addMeasure(state, action) {
      state.measures.push(action.payload);
    },
    removeMeasure(state, action) {
      state.measures.splice(action.payload, 1);
    },
    modifyMeasures(state, action) {
      state.measures = action.payload;
    },
  },
});

export const { addMeasure, removeMeasure, modifyMeasures } =
  measureSlice.actions;
