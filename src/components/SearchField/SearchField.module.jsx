import React, { useState } from 'react';
import style from './SearchField.module.css'
import { fetchWeatherAction } from '../../redux/slices/weatherSlices';
import { useDispatch } from 'react-redux';

const SearchField = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('Kyiv')
  return (
    <div className={style.search}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="enter your lacation"
        className={style.locationInput}>
      </input>
      <button
        onClick={() => dispatch(fetchWeatherAction(city))}
        type="button"
        className={style.locationSearcher}>
        Search
          </button>
    </div>
  )
}
export default SearchField;