import React from "react";
import "./header.css";
import logoEltaxi from "./images/header-logo.svg";
import headerLocation from "./images/header-location.svg";
import arrowDown from "./images/arrow-down.svg";
// import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__top">
          <img src={logoEltaxi} alt="Logo  eltaxi" />
          <span className="header-location">
            <img src={headerLocation} alt="" className="locationImg" />
            Бишкек
            <img src={arrowDown} alt="" className="arrow-down" />
            <a className="header__top__link" href="tel:+996709909443">+996 709 909 443</a>
          </span>
        </div>
        <div className="header__bottom" > 
          <ul className="header__bottom-items">
            <li className="header__bottom-item">
              <a href="/klient">Клиентам</a>
            </li>
            <li className="header__bottom-item">
              <a href="/klient">Стать водителем</a>
            </li>
            <li className="header__bottom-item">
              <a href="/klient">Для бизнеса</a>
            </li>
            <li className="header__bottom-item">
              <a href="/klient">Подключить таксопарк</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
