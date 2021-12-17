import React from "react";
import "./header.css";
import logoEltaxi from "./logo-eltaxi.png";
// import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__wrapper">
        <div className="header__wrapper-logo">
          <a href="/цй">
            <img
              src={logoEltaxi}
              alt="logo-eltaxi"
              className="header__wrapper-logo-img"
            />
          </a>
        </div>
        <div className="header__wrapper-navbar">
          <ul className="header__navbar">
          <li className="header__navbar-items">
          <a href="/цй">Клиентам</a>
          </li> 
          <li className="header__navbar-items">
          <a href="/цй">
          Стать водителем             </a>
          </li>
          <li className="header__navbar-items">
          <a href="/цй">
          Для бизнеса             </a>
          </li>
          <li className="header__navbar-items">
          <a href="/цй">
        Подключить таксопарк             </a>
            </li>
          </ul>
        </div>
        <div className="header__wrapper-btn">
          <button className="header__btn">Вызвать такси</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
