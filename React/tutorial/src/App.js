import React from "react";
import "./App.css";
import WeatherEngine from "./components/WeatherEngine";

function App() {
  return (
    <div className="App">
      <WeatherEngine location="Moscow"></WeatherEngine>
      <WeatherEngine location="Oxford"></WeatherEngine>
    </div>
  );
}

export default App;
