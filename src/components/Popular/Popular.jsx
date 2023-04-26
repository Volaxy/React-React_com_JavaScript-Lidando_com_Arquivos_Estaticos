import React from 'react';

import photos from "./photos-popular.json";

import style from "./scss/popular.module.scss";

export default function Popular() {
    return (
        <aside className={style.popular}>
            <h2>Popular</h2>

            <ul className={style.popular__images}>
                {photos.map(photo => {
                    return (
                        <li key={photo.id}>
                            <img src={photo.path} alt={photo.alt} />
                        </li>
                    )
                })}
            </ul>

            <button>View More</button>
        </aside>
    )
}
