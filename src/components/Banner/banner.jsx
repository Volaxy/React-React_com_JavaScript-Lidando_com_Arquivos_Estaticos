import React from 'react'

import Menu from '../Menu/menu';

import style from "./scss/banner.module.scss";

import BannerBackground from "./images/backgrounds/banner.png";

export default function banner() {
    return (
        <section className={style.main}>
            <Menu />

            <div className={style.main__image}>
                <h1>The most complete gallery of space photos!</h1>
                <img src={BannerBackground} alt="A view from the top of a mountain range" />
            </div>
        </section>
    )
}
