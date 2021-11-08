import React from 'react';
import './App.css';
import SearchField from './components/SearchField/SearchField.module';
import CurrentWeather from './components/CurrentWeather/CurrentWeather';

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <h1>Weather APP</h1>
        <p>Find out current weather</p>
        <SearchField/>
        <CurrentWeather />
      </div>

    </div>
  );
}

export default App;
