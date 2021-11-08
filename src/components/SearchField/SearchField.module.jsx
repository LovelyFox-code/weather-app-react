import React from 'react';
import style from './SearchField.module.css'

const SearchField = () =>{
    return(
        <div className={style.search}>
          <input
          type="text"
          value="{location}"
          placeholder="enter your lacation"
          className={style.locationInput}>
          </input>
          <button className={style.locationSearcher}>
            Search location
          </button>
        </div>
    )
}
export default SearchField;