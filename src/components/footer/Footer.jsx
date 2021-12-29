import React from "react";
import footerLogo from "./images/footerLogo.svg";
import ecoel from "./images/wh.svg";
import appStore from "./images/fb.svg";
import playmarket from "./images/ins.svg";
import ins from "./images/ins.svg";
import fb from "./images/fb.svg";
import wh from "./images/wh.svg";
import tg from "./images/tg.svg";

import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__container__links">
          <div className="footer__container__items">
            <div className="footer__container__item">
              <a href="/dsd">Наши услуги</a>

              <a href="/dsd">Клиентам</a>
              <a href="/dsd">Стать водителем</a>
              <a href="/dsd">Для бизнеса</a>
              <a href="/dsd">Франшиза</a>
            </div>
            <div className="footer__container__item">
              <a href="/dsd">Помощь и поддержка</a>
              <a href="/dsd">Центр поддержки</a>
              <a href="/dsd">Контакты</a>
              <a href="/dsd">Города</a>
            </div>
            <div className="footer__container__item">
              <a href="/dsd">О нас</a>
              <a href="/dsd">Вакансии</a>
              <a href="/dsd">Блог</a>
              <a href="/dsd">Зеленый план</a>
              <a href="/dsd">Безопасность</a>
            </div>
          </div>
        </div>
        <div className="footer__container__info">
          <div className="footer__container__info-logo">
            <img src={footerLogo} alt="" />
            <div className="footer__container__info-project">
              <span>Проект: </span>
              <img src={ecoel} alt="" />
            </div>
          </div>
          <div className="footer__container__info-apps">
            <img src={playmarket} alt="" />
            <img src={appStore} alt="" />
          </div>
          <div className="footer__container__info-nav">
            <a href="/dss">© 2021 ЭлTaxi</a>
            <a href="/dss">Правовая информация</a>
            <a href="/dss">Центр поддержки</a>
          </div>
          <div className="footer__container__info-social">
            <img src={ins} alt="" />
            <img src={tg} alt="" />
            <img src={wh} alt="" />
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
