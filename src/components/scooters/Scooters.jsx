import React from "react";
import "./scooters.css";
import carImg from "./carImg.svg";
function Scooters() {
  return (
    <div className="taxi">
      <div className="taxi__container">
        <div className="taxi__container-info">
          <div className="taxi__container-tittle">
            <h1>Самокаты</h1>
          </div>
          <div className="taxi__container-subtittle">
            <p>Для тех, кто любит прокатиться с ветерком</p>
          </div>
         
        </div>
        <div className="taxi__container-img">
          <img src={carImg} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Scooters;
