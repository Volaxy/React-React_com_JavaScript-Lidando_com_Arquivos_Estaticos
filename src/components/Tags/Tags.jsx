import React from 'react';

import style from "./scss/tags.module.scss";

export default function Tags() {
    return (
        <div className={style.tags}>
            <p>Filter by tags:</p>
            
            <ul className={style.tags__list}>
                <li>Stars</li>
                <li>Galaxies</li>
                <li>Moon</li>
                <li>Planets</li>
            </ul>
        </div>
    )
}
