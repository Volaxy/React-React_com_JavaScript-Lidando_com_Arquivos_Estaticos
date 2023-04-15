// This import the styles of SCSS like an object
import style from "./scss/header.module.scss";

import Logo from "./images/logo.png";
import Search from "./images/icons/search.png";

export default function Header() {
    return (
        // To use the styles of SCSS, put the object followed by the "." and the class name of the style
        <header className={style.header}>
            <img src={Logo} alt="Logo of the Alura Space" />

            <div className={style.header__container}>
                <input className={style.header__input} type="text" placeholder="What you looking for?" />
                <img src={Search} alt="Icon of a magnifying glass" />
            </div>
        </header>
    )
}