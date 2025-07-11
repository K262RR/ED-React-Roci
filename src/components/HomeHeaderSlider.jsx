import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./HomeHeaderSlider.scss";
import HexagonButton from "../components/UI/HexagonButton";

export default function HomeHeaderSlider() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
  };

  const slides = [
    {
      id: 1,
      title: "ROCI",
      subtitle: "Мы предоставляем",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      buttonText: "Подробнее",
      buttonLink: "/",
      image: "/images/homeSliderFootball.jpg",
      textAlign: "right",
    },
    {
      id: 2,
      title: "ROCI",
      subtitle: "Мы предоставляем",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
      buttonText: "Подробнее",
      buttonLink: "/",
      image: "/images/homeSliderHockey.jpg",
      textAlign: "left",
    },
  ];

  return (
    <Slider {...settings} className="homeHeader__slider">
      {slides.map((slide) => (
        <div className="homeHeader__slider__item" key={slide.id}>
          <div className="homeHeader__slider__item__image">
            <img src={slide.image} alt={slide.title} />
          </div>
          <div className="homeHeader__slider__item__content">
            <div className="container">
              <div
                className={`homeHeader__slider__item__content__inner ${slide.textAlign}`}
              >
                <h3>{slide.title}</h3>
                <h4>{slide.subtitle}</h4>
                <p>{slide.text}</p>
                <HexagonButton link={slide.buttonLink} color="accent">
                  {slide.buttonText}
                </HexagonButton>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}
