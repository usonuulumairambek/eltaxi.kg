import React from "react";
import "./taxi.css";
import carImg from "./images/carImg.svg";
import box1 from "./images/box1.svg";
import box2 from "./images/box2.svg";
import box3 from "./images/box3.svg";

function Taxi() {
  return (
    <div className="taxi">
      <div className="taxi__container">
        <div className="taxi__container-info">
          <div className="taxi__container-tittle">
            <h1>Такси</h1>
          </div>
          <div className="taxi__container-subtittle">
            <p>Эконом, комфорт и бизнес — поездки <br /> на любой случай</p>
          </div>
          <div className="taxi__container-box">
            <div className="taxi__container-items">
              <img src={box1} alt="" />
              <h2>Быстро и просто</h2>
              <p>Подача за считаные минуты</p>
            </div>
            <div className="taxi__container-items">
              <img src={box3} alt="" />
              <h2>Удобно</h2>
              <p>Доберитесь куда угодно - всего в пару касаний</p>
            </div>
            <div className="taxi__container-items">
              <img src={box2} alt="" />
              <h2>Отличные цены</h2>
              <p>
                Мы стремимся предлагать лучшие цены на поездки в каждом городе
              </p>
            </div>
            
          </div>
        </div>
        <div className="taxi__container-img">
          <img src={carImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Taxi;
