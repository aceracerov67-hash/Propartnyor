import React from "react";
import { useTranslation } from "react-i18next";
import dubai from "./images/dubai2.jpg";
import istanbul from "./images/istanbul2.jpg";
import sharm from "./images/sharm2.jpg";

const images = [dubai, istanbul, sharm];
const stars = [5, 5, 4];

const Destinations = () => {
  const { t } = useTranslation();
  const cards = t("destinations.cards", { returnObjects: true });

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      className="max-w-7xl mx-auto px-4 py-16"
    >
    
      <div className="text-center mb-12">
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-blue-500 text-sm mb-2"
        >
          {t("destinations.sectionTitle")}
        </p>

        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-3xl md:text-4xl font-semibold"
        >
          {t("destinations.sectionSubtitle")}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((item, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={300 + index * 150}
            className="
              group
              bg-white
              rounded-xl
              shadow-lg
              overflow-hidden
              transition-all
              duration-500
              hover:-translate-y-3
              hover:shadow-2xl
            "
          >
            <div className="relative overflow-hidden">
              <img
                src={images[index]}
                alt={item.title}
                className="
                  h-56
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-110
                "
              />

              <div
                data-aos="fade"
                data-aos-delay={400 + index * 150}
                className="
                  absolute inset-0
                  bg-black/20
                  opacity-0
                  transition-opacity
                  duration-500
                  group-hover:opacity-100
                "
              ></div>

              <div
                data-aos="zoom-in"
                data-aos-delay={500 + index * 150}
                className="absolute top-4 left-4 flex gap-1 text-white z-10"
              >
                {Array.from({ length: stars[index] }).map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>

            <div className="p-6 transition-all duration-500 group-hover:bg-gray-50">
              <h3
                data-aos="fade-up"
                data-aos-delay={550 + index * 150}
                className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-blue-600"
              >
                {item.title}
              </h3>

              <p
                data-aos="fade-up"
                data-aos-delay={600 + index * 150}
                className="text-blue-500 text-sm mb-3"
              >
                {item.subtitle}
              </p>

              <p
                data-aos="fade-up"
                data-aos-delay={650 + index * 150}
                className="text-gray-600 text-sm leading-relaxed"
              >
                {item.desc}
              </p>
            </div>

         
            <div
              data-aos="fade-up"
              data-aos-delay={700 + index * 150}
              className="border-t grid grid-cols-2 text-sm"
            >
              <button
                className="
                  py-3
                  text-blue-500
                  transition-all
                  duration-300
                  hover:bg-blue-50
                  hover:font-semibold
                "
              >
                {t("destinations.buttons.more")}
              </button>

              <button
                className="
                  py-3
                  text-gray-500
                  transition-all
                  duration-300
                  border-l
                  hover:bg-gray-100
                  hover:text-blue-600
                  hover:font-semibold
                "
              >
                {t("destinations.buttons.book")}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Destinations;

