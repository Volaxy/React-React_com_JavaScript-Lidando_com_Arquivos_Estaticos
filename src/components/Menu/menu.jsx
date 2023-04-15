import React from 'react';

import HouseIcon from "./images/icons/home-ativo.png";
import EyeIcon from "./images/icons/mais-vistas-inativo.png";
import LikeIcon from "./images/icons/mais-curtidas-inativo.png";
import StarIcon from "./images/icons/novas-inativo.png";
import LightBulbIcon from "./images/icons/surpreenda-me-inativo.png";

import style from "./scss/menu.module.scss";

export default function Menu() {
    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                <li className={style.menu__item}>
                    <img src={HouseIcon} alt="A house icon" />
                    <a href="/">Home</a>
                </li>
                
                <li className={style.menu__item}>
                    <img src={EyeIcon} alt="A eye icon" />
                    <a href="/">Most Views</a>
                </li>

                <li className={style.menu__item}>
                    <img src={LikeIcon} alt="A like icon" />
                    <a href="/">More Likes</a>
                </li>

                <li className={style.menu__item}>
                    <img src={StarIcon} alt="A star icon" />
                    <a href="/">News</a>
                </li>

                <li className={style.menu__item}>
                    <img src={LightBulbIcon} alt="A light bulb icon" />
                    <a href="/">Surprise me</a>
                </li>
            </ul>
        </nav>
    )
}
