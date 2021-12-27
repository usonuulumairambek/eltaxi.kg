import React from "react";
import "./referral.css";
import carImg from "./carImg.svg";
function Referral() {
  return (
    <div className="taxi">
      <div className="taxi__container">
        <div className="taxi__container-img">
          <img src={carImg} alt="" />
        </div>
        <div className="taxi__container-info">
          <div className="taxi__container-tittle">
            <h1>Реферальная программа</h1>
          </div>
          <div className="taxi__container-subtittle">
            <p>
              Катайтесь больше, увеличивайте свой уровень и повышайте кешбэк до
              15%
            </p>
          </div>
          <div className="taxi__container-button">
           <button>Получить кешбэк</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Referral;
