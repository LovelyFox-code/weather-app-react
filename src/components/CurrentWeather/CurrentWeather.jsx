import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './CurrentWeather.module.css'
import { fetchWeatherAction } from '../../redux/redusers/weatherSlices';


const CurrentWeather = () => {
    //dispatch action
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchWeatherAction("Kyiv"));
    }, [])

    //select states from store
    const state = useSelector((state) => state);
    const { weather, error } = state;

    //add weather name to latest search

    return (
        <div>
            {error ? <h1>{error?.message}</h1> :
                <div className={style.appData}>
                    <img class="icon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt="" />
                    <p className={style.temp}>
                        {weather?.name},
                {weather?.sys?.country} {" "}
                        {Math.ceil(Number(weather?.main.temp) - 273.15)} °C{" "}
                    </p>
                    <p className={style.description}>
                        The weather condition in {weather?.name},
                {weather?.sys?.country} is describe as: {" "}
                        {weather?.weather[0].description} with a temperature of {" "}
                        {Math.round(parseFloat(weather?.main.temp) - 273.15)} °C and humidity of {" "}
                        {weather?.main?.humidity} %Fells like
                {Math.round(parseFloat(weather?.main?.feels_like) - 273.15)} °C
            </p>
                </div>
            }
        </div>

    )
}
export default CurrentWeather;