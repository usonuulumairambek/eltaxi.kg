import React from "react";
import footerLogo from "./images/footerLogo.svg";
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
          </div>
          <div className="footer__container__info-apps">
            <img src={footerLogo} alt="" />
            <img src={footerLogo} alt="" />
          </div>
          <div className="footer__container__info-nav">
            <a href="/dss">© 2021 ЭлTaxi</a>
            <a href="/dss">Правовая информация</a>
            <a href="/dss">Центр поддержки</a>
          </div>
          <div className="footer__container__info-social">
            <img src={footerLogo} alt="" />
            <img src={footerLogo} alt="" />
            <img src={footerLogo} alt="" />
            <img src={footerLogo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
