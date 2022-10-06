import {createSlice} from '@reduxjs/toolkit';

export const measureSlice = createSlice({
  name: 'toolkit',
  initialState: {
  measures: []
  },
  reducers: {
    addMeasure(state, action) {
      state.measures.push(action.payload)
    },
    removeMeasure(state) {
      state.measures.pop()
    },
    modifyMeasures(state, action) {
      state.measures = action.payload
    }
  }
})

export const {addMeasure, removeMeasure, modifyMeasures } = measureSlice.actions