import React from 'react';
import Card from './Card/Card';

export default function Cards({photos, style}) {
    return (
        <ul className={style.gallery__cards}>
            {photos.map(photo => 
                <Card key={photo.id} photo={photo} style={style} />
            )}
        </ul>
    )
}
