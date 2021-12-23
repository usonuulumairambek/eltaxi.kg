import React from "react";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";
import slideImg1 from "./images/img1.svg";

let Slider1 = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 2,

  };

  return (
    <Slider {...settings}>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>
      </div>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>{" "}
      </div>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>
      </div>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>
      </div>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>
      </div>
      <div className="slider__container">
        <div className="slider__container-item">
          <img src={slideImg1} alt="" />
        </div>
      </div>
    </Slider>
  );
};

export default Slider1;
