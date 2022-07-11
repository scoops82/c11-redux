import { createSlice } from "@reduxjs/toolkit";

// false means light is off
const initialState = {
  flashlightOn: false,
};

export const flashlightSlice = createSlice({
  name: "flashlight",
  initialState,
  reducers: {
    on: (state) => {
      state.flashlightOn = true;
    },
    off: (state) => {
      state.flashlightOn = false;
    },
  },
});

export const { on, off } = flashlightSlice.actions;

export const flashlightStatus = (state) => state.flashlight.flashlightOn;

export default flashlightSlice.reducer;
