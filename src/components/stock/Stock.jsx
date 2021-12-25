import React from "react";
import "./stock.css";
import stockImg from "./images/stockImg.svg";
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
              <input type="tell" />
              <button>Получить кешбэк</button>
            </form>
          </div>
          <h5>или установите по ссылке ниже</h5>
          {/* <img src={none} alt="" />
          <img src={none} alt="" /> */}
        </div>
        <div className="stock__container__img">
          <img src={stockImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Stock;
