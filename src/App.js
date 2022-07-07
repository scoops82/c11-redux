import React from "react";
import ErrorBoundaryComponent from "./components/ErrorBoundary.jsx";
import { TrafficLight } from "./features/traffic-light/TrafficLight";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ErrorBoundaryComponent>
        <TrafficLight />
      </ErrorBoundaryComponent>
    </div>
  );
}

export default App;
