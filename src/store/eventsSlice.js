import { createSlice } from "@reduxjs/toolkit";

export const eventsSlice = createSlice({
  name: 'eventsSlice',
  initialState: {
    events: []
  },
  reducers: {
    addEvent(state, action) {
      state.events.push(action.payload)
    },
    deleteEvent(state, action) {
      state.events.splice(action.payload, 1)
    },
    updateEvents(state, action) {
      state.events = action.payload
    }
  }
})

export const {addEvent, deleteEvent, updateEvents} = eventsSlice.actions