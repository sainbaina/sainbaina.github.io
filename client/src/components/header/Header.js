import React from "react";
import logo from "../../images/icons/tek.png"
import "../header/style.css"

const Header = () => {
    const windowWidth = window.innerWidth;

    return (
        <header className="header">
            <div >
                <img className="logo" style={{width: windowWidth * 0.06}} src={logo} />
            </div>
            <nav className="nav">
                <a href={"/#Main"}>Главная</a>
                <a href={"/#Articles"}>Статьи</a>
                <a href={"/#Certificates"}>Сертификаты</a>
            </nav>
        </header>
    );
}

export default Header;