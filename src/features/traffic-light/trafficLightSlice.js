import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  red: true,
  amber: false,
  green: false,
};

export const trafficLightSlice = createSlice({
  name: "trafficLights",
  initialState,
  reducers: {
    stop: (state) => {
      state.red = true;
      state.amber = false;
      state.green = false;
    },
    caution: (state) => {
      state.red = false;
      state.amber = true;
      state.green = false;
    },
    go: (state) => {
      state.red = false;
      state.amber = false;
      state.green = true;
    },
  },
});

export const { stop, caution, go } = trafficLightSlice.actions;

export const redLightStatus = (state) => {
  console.log(state);
  return state.trafficLights.red;
};
export const amberLightStatus = (state) => state.trafficLights.amber;
export const greenLightStatus = (state) => state.trafficLights.green;

export default trafficLightSlice.reducer;
