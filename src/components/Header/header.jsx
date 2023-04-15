import Logo from "./images/logo.png";
import Search from "./images/icons/search.png";

import style from "./scss/header.module.scss";

export default function Header() {
    return (
        <header className={style.header}>
            <img src={Logo} alt="Logo of the Alura Space" />

            <div className={style.header__container}>
                <input className={style.header__input} type="text" placeholder="What you looking for?" />
                <img src={Search} alt="Icon of a magnifying glass" />
            </div>
        </header>
    )
}