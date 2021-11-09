import React from 'react';
import style from './LatestSearch.module.css';


const LatestSearch = () => {

    return (
        <div className={style.latestWeatherBlock}>
            <p>Latest Search</p>
            <div className={style.row}>
                <a href=""><p>Kyiv</p></a>
            </div>
        </div>
    )
}
export default LatestSearch;