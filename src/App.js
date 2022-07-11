import React from "react";
import ErrorBoundaryComponent from "./components/ErrorBoundary.jsx";
import { TrafficLight } from "./features/traffic-light/TrafficLight";
import "./App.css";
import { Flashlight } from "./features/flashlight/Flashlight.js";

function App() {
  return (
    <div className="App">
      <ErrorBoundaryComponent>
        <TrafficLight />
        <Flashlight />
      </ErrorBoundaryComponent>
    </div>
  );
}

export default App;
