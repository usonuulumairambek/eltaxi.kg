import React from "react";
import "./rent.css";
import carImg from "./images/carImg.svg";
import box1 from "./images/box1.svg";
import box2 from "./images/box2.svg";
import box3 from "./images/box3.svg";

function Rent() {
  return (
    <div className="taxi">
      <div className="taxi__container">
        <div className="taxi__container-img">
          <img src={carImg} alt="" />
        </div>
        <div className="taxi__container-info">
          <div className="taxi__container-tittle">
            <h1>Аренда авто</h1>
          </div>
          <div className="taxi__container-subtittle">
            <p>
              ЭлТакси — доступный и комфортный <br />
              каршеринг на каждый день
            </p>
          </div>
          <div className="taxi__container-box">
            <div className="taxi__container-items">
              <img src={box1} alt="" />
              <h2>Большой выбор</h2>
              <p>Nissan Qashqai, BMW i3, MINI Cooper</p>
            </div>
            <div className="taxi__container-items">
              <img src={box3} alt="" />
              <h2>Удобно</h2>
              <p>Доступна опция КАСКО для каждой машины</p>
            </div>
            <div className="taxi__container-items">
              <img src={box2} alt="" />
              <h2>Отличные цены</h2>
              <p>Цена от 4сом. / мин.*</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Rent;
