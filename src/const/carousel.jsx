
import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import argentina from '../const/img/argentina.jpg';
import dubai from '../const/img/dubai.jpg';
import istanbul from '../const/img/istanbul.jpg';
import saudi from '../const/img/saudi.jpg';
import sharm from '../const/img/sharm.jpg';
import thailand from '../const/img/tailand.jpg';



const places = [
  {
    img: istanbul,
    title: "istanbul",
    desc: "76 bookings",
  },
  {
    img: sharm,
    title: "sharm-al-sheikh",
    desc: "96 bookings",
  },
  {
    img: thailand,
    title: "thailand",
    desc: "96 bookings",
  },
  {
    img: argentina,
    title: "argentina",
    desc: "66 bookings",
  },
  {
    img: dubai,
    title: "dubai",
    desc: "66 bookings",
  },
  {
    img: saudi,
    title: "saudi",
    desc: "76 bookings",
  },
];

const ResponsiveCarousel = () => {
  const { t } = useTranslation();

  const settings = {
    dots: true,
    infinite: false,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {places.map((item, index) => (
        <li
          key={index}
          className="relative h-[320px] p-5 overflow-hidden rounded-xl"
        >
  
          <img
            src={item.img}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/40"></div>

       
          <div className="relative z-10 flex flex-col h-full justify-end gap-1 text-white">
            <h4 className="text-[19px] font-medium tracking-wide">
              {t(item.title)}
            </h4>
            <p className="text-[13px] font-light tracking-wide">
              {t(item.desc)}
            </p>
          </div>
        </li>
      ))}
    </Slider>
  );
};

export default ResponsiveCarousel;
