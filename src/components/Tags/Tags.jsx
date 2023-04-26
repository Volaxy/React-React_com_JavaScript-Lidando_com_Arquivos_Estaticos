import React from 'react';

import style from "./scss/tags.module.scss";

export default function Tags({tags, filterPhotos, showAll}) {
    return (
        <div className={style.tags}>
            <p>Filter by tags:</p>
            
            <ul className={style.tags__list}>
                <li onClick={showAll}>All</li>
                {tags.map(tag => {
                    return (
                        <li key={tag} onClick={() => filterPhotos(tag)}>
                            {tag}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
