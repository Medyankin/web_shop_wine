import React from "react";
import h from './header.module.css';

const Header = () => {
    return (
        <div className={h.header}>
            <div className={h.container}>
                <nav className={h.nav}>
                <a className={h.logo} href="#">
                    <img src="/img/logo.svg" alt="logotip" />
                </a>
                    <div className={h.menu}>
                            <a className={h.active} href="#">Главная</a>
                            <a className={h.link} href="#">О нас</a>
                            <a className={h.link} href="#">Меню</a>
                            <a className={h.link} href="#">Заказать</a>
                    </div>
                    <a className={h.basket} href="#">
                        <img src="/img/basket.svg" alt="basket" />
                        <span className={h.event}></span>
                    </a>
                </nav>
            </div>
        </div>
    )
}
export default Header;