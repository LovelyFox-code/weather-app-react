import React from "react";
import "./App.css";
import SearchField from "./components/SearchField/SearchField";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <h3>Weather Forecast</h3>
        <SearchField />
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
