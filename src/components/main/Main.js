import React from "react";
import "./main.css";
import ellipse1 from "./images/E1.png";
import ellipse2 from "./images/E2.png";
import googlePlay from "./images/appStore.png"
import appStore from "./images/googlePlay.png"
function Main() {
  return (
    <div>
      <img className="e1" src={ellipse1} alt="" />
      <img className="e2" src={ellipse2} alt="" />
      <div className="main">
        <div className="main__tittle">
          <div className="main__tittle-tittle">
            <h1>Быстрые и доступные поездки.</h1>
          </div>
          <div className="main__tittle-download">
            <h3>
              Скачайте приложение <span>Dylyver</span>{" "}
            </h3>
          </div>
          <div className="main__tittle-images">
           <img src={appStore} alt="" />
           <img src={googlePlay} alt="" />
          </div>
        </div>
        <div className="main__img">dsds</div>
      </div>
    </div>
  );
}

export default Main;
