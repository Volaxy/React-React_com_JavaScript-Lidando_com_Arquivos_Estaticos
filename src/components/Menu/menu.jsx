import React from 'react';

import icons from "./icons.json";

import style from "./scss/menu.module.scss";

export default function Menu() {
    return (
        <nav className={style.menu}>
            <ul className={style.menu__list}>
                {icons.map(icon => {
                    return (
                        <li key={icon.id} className={style.menu__item}>
                            <img src={icon.url} alt={icon.description} />
                            <a href="/">{icon.linkText}</a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
