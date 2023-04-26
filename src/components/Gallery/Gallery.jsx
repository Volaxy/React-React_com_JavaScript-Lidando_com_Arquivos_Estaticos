import React from 'react';

import Tags from '../Tags/Tags';

import style from "./scss/gallery.module.scss";

// The URL inside the json references the path starts the search from the "public" folder
import photos from "./photos.json";
import Cards from './Cards/Cards';

export default function Gallery() {
    return (
        <section className={style.gallery}>
            <h2>Browse accross the gallery</h2>

            <Tags />

            <Cards photos={photos} style={style} />
        </section>
    )
}
