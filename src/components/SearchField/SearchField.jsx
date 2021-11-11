import React, { useState } from 'react';
import style from './SearchField.module.css'
import { fetchWeatherAction } from '../../redux/redusers/weatherSlices';
import { useDispatch } from 'react-redux';
import SearchContainer from '../SearchContainer/SearchContainer';

const SearchField = () => {
  const dispatch = useDispatch();
  const [city, setCity] = useState('Kyiv');

  const [latestSearch, setLatestSearch] = useState([]);

  const latestSearchDiv = (<div className={style.row}>
    {latestSearch.map(search => (
      <button
        onClick={() =>
          dispatch(fetchWeatherAction(search))
        }
        className={style.searchContainerEl}>
        {search}
      </button>
    ))}
  </div>)
  return (
    <div className={style.search}>
      <input
        type="text"
        value={city}
        onChange={e => setCity(e.target.value)}
        placeholder="enter your location"
        className={style.locationInput}>
      </input>
      <button
        onClick={() => {
          setLatestSearch([...latestSearch, city].length > 10 ? [...latestSearch, city].reverse().slice(0, -1) : [...latestSearch, city].reverse());
          dispatch(fetchWeatherAction(city))
        }}
        type="button"
        className={style.locationSearcher}>
        Search
      </button>
      {/* latest search div */}
      <SearchContainer div={latestSearchDiv} />
    </div>

  )
}
export default SearchField;