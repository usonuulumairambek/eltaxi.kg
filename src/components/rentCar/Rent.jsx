import React from "react";
import "./rent.css";
import carImg from "./carImg.svg";
function Rent() {
  return (
    <div className="taxi">
      <div className="taxi__container">
        <div className="taxi__container-info">
          <div className="taxi__container-tittle">
            <h1>Аренда авто</h1>
          </div>
          <div className="taxi__container-subtittle">
            <p>Эконом, комфорт и бизнес — поездки на любой случай</p>
          </div>
          <div className="taxi__container-box">
            <div className="taxi__container-box1">Быстро и просто</div>
            <div className="taxi__container-box2">Удобно</div>
            <div className="taxi__container-box3">Отличные цены</div>
          </div>
        </div>
        <div className="taxi__container-img">
            <img src={carImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Rent;
