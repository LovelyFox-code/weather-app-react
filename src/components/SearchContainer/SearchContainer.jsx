import React from 'react';
import style from './SearchContainer.module.css';


const SearchContainer = (props) => {
    return (
        <div className={style.searchContainer}>
            <p>Latest Search</p>
            {props.div}
        </div>
    )
}
export default SearchContainer;