import React from 'react';

import open from "../../images/icons/open.png";
import favorite from "../../images/icons/favorito.png";

export default function Card({photo, style}) {
    return (
        <li className={style.gallery__card}>
            <img className={style.gallery__image} src={photo.imagem} alt={photo.titulo} />
            <p className={style.gallery__description}>{photo.titulo}</p>

            <div>
                <p>{photo.creditos}</p>

                <span>
                    <img src={favorite} alt="Heart Icon" />
                    <img src={open} alt="Open modal icon" />
                </span>
            </div>
        </li>
    )
}
