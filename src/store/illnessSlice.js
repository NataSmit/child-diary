import {createSlice} from '@reduxjs/toolkit';

export const illnessSlice = createSlice({
  name: 'illnessSlice',
  initialState: {
    illnessList: [],
  },
  reducers: {
    addIllness(state, action) {
      state.illnessList.push(action.payload)
    },
    deleteIllness(state, action) {
      state.illnessList.splice(action.payload, 1)
    },
    updateIllnessList(state, action) {
      state.illnessList = action.payload
    }
  }
})

export const {addIllness, deleteIllness, updateIllnessList} = illnessSlice.actions;