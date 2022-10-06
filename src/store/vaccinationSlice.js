import { createSlice } from "@reduxjs/toolkit";

export const vaccinationSlice = createSlice({
  name: "vaccination",
  initialState: {
    vaccinationDetails: [],
  },
  reducers: {
    addVaccinationInfo(state, action) {
      state.vaccinationDetails.push(action.payload);
    },
    deleteVaccinationInfo(state, action) {
      state.vaccinationDetails.splice(action.payload, 1);
    },
    updateVaccinationDetailsArr(state, action) {
      state.vaccinationDetails = action.payload;
    },
  },
});

export const {
  addVaccinationInfo,
  deleteVaccinationInfo,
  updateVaccinationDetailsArr,
} = vaccinationSlice.actions;
