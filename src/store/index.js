import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {measureSlice} from './measureSlice';
import {vaccinationSlice} from './vaccinationSlice';
import {eventsSlice} from './eventsSlice';

const rootReducer = combineReducers({
  measureSlice: measureSlice.reducer,
  vaccinationSlice: vaccinationSlice.reducer,
  eventsSlice: eventsSlice.reducer
})

export const store = configureStore({
  reducer: rootReducer,
})

