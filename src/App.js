import React from "react";
import "./App.css";
import SearchField from "./components/SearchField/SearchField.module";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather";
import LatestSearch from "./components/LatestSearch/LatestSearch";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <h3>Weather Forecast</h3>
        <SearchField />
        <LatestSearch />
        <CurrentWeather />
      </div>
    </div>
  );
}

export default App;
