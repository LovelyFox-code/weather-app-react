import React from 'react';
import style from './CurrentWeather.module.css'

const CurrentWeather = () => {
    return (
        <div>
            <div className={style.appData}>
                <p className={style.temp}>Current Temparature: 40</p>
            </div>
            {/* <img className={style.appImage} src={photos} alt="" /> */}
        </div>

    )
}
export default CurrentWeather;