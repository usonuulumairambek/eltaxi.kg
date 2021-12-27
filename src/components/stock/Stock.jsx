import React from "react";
import "./stock.css";
import stockImg from "./images/stockImg.svg";
import  appStore from "./images/appStore.svg";
import  playmarket from "./images/playMarket.svg";
function Stock() {
  return (
    <div className="stock">
      <div className="stock__container">
        <div className="stock__container_info">
          <h1>Больше хороших поездок!</h1>
          <h4>
            Оставьте свой номер телефона и получите ссылку для скачивания
            приложения
          </h4>
          <div className="stock__container_info-form">
            <form action="./action">
              <div className="stock__container_info-input">
                <input type="tell" />
              </div>
              <div className="stock__container_info-button">
                <button>Получить кешбэк</button>
              </div>
            </form>
          </div>
          <h5>или установите по ссылке ниже</h5>
          <img src={appStore} alt="" />
          <img src={playmarket} alt="" />
        </div>
        <div className="stock__container__img">
          <img src={stockImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Stock;
