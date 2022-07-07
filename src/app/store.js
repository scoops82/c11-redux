import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from '../features/counter/counterSlice';
import trafficLightReducer from "../features/traffic-light/trafficLightSlice";

export const store = configureStore({
  reducer: {
    trafficLights: trafficLightReducer,
  },
});
