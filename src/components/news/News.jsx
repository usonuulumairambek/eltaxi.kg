import React from "react";
import "./news.css";
import arrowLeft from "./images/arrowLeft.svg";
function News() {
  return (
    <div className="news">
      <div className="news_container">
        <div className="news_container-items">
          <h2>Как обновить новогодний плейлист прямо в поездке? Читайте</h2>
          <div className="news_container-date">
            <h3>16 декабря 2021</h3>
            <img src={arrowLeft } alt="" />
          </div>
        </div>
        <div className="news_container-items">
          <h2>Как обновить новогодний плейлист прямо в поездке? Читайте</h2>
          <div className="news_container-date">
            <h3>16 декабря 2021</h3>
            <img src={arrowLeft } alt="" />
          </div>
        </div>
        <div className="news_container-items">
          <h2>Как обновить новогодний плейлист прямо в поездке? Читайте</h2>
          <div className="news_container-date">
            <h3>16 декабря 2021</h3>
            <img src={arrowLeft } alt="" />
          </div>
        </div>
        <div className="news_container-items">
          <h2>Как обновить новогодний плейлист прямо в поездке? Читайте</h2>
          <div className="news_container-date">
            <h3>16 декабря 2021</h3>
            <img src="./" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default News;
