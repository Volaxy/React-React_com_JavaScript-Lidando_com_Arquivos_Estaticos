import React, { useState } from 'react';

import Tags from '../Tags/Tags';

import style from "./scss/gallery.module.scss";

// The URL inside the json references the path starts the search from the "public" folder
import photosJson from "./photos.json";
import Cards from './Cards/Cards';

export default function Gallery() {
    const [photos, setPhotos] = useState(photosJson);
    
    const tags = [...new Set(photosJson.map(photo => photo.tag))];

    const filterPhotosByTag = (tag) => {
        const filteredPhotos = photosJson.filter(photo => photo.tag === tag);

        setPhotos(filteredPhotos);
    }

    const showAll = () => {
        setPhotos(photosJson);
    }

    return (
        <section className={style.gallery}>
            <h2>Browse accross the gallery</h2>

            <Tags tags={tags} filterPhotos={filterPhotosByTag} showAll={showAll} />

            <Cards photos={photos} style={style} />
        </section>
    )
}
