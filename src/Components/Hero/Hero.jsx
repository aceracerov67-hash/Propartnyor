import React from "react";
import { useTranslation } from "react-i18next";
import heroBg from "../../assets/banner.png";
import ResponsiveCarousel from "../../const/carousel";
import Destinations from "./Destinations/Destinations";
import Services from "./Services/Services";
import Accardion from "./Accardion/Accardion";
import Video from "./Video/Video";
import Pricing from "./Pricing/Pricing";
import MapSection from "./MapSection/MapSection";
import Zapros from "./Zapros/Zapros";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
    
      <section
      id="home"
        data-aos="fade"
        data-aos-duration="1000"
        className="relative w-full h-[650px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
     
     
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="max-w-xl text-white"
          >
            <span
              data-aos="fade-right"
              data-aos-delay="300"
              className="block w-20 h-1 bg-blue-500 mb-6"
            ></span>

            <h1
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-5xl font-light mb-6"
            >
              {t("hero.title")}
            </h1>

            <p
              data-aos="fade-up"
              data-aos-delay="500"
              className="text-lg leading-relaxed mb-8"
            >
              {t("hero.subtitle")}
            </p>

            <button
              data-aos="zoom-in"
              data-aos-delay="600"
              className="bg-blue-500 text-white px-6 py-3 font-medium hover:bg-blue-600 transition"
            >
              {t("hero.learnMore")}
            </button>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-full px-6"
        >
          <form
            onSubmit={(e) => e.preventDefault()}
            className="max-w-6xl mx-auto flex flex-col md:flex-row bg-white rounded-md shadow-xl overflow-hidden"
          >
            <input
              type="text"
              placeholder={t("hero.form.name")}
              className="w-full px-6 py-4 outline-none border-r"
            />

            <input
              type="text"
              placeholder={t("hero.form.address")}
              className="w-full px-6 py-4 outline-none border-r"
            />

            <div className="flex items-center px-6 py-4 border-r gap-3">
              <input type="date" className="outline-none text-gray-600" />
            </div>

            <button
              type="submit"
              className="bg-[#4f83ff] text-white px-10 py-4 font-semibold hover:bg-blue-600 transition whitespace-nowrap"
            >
              {t("hero.form.book")}
            </button>
          </form>
        </div>
      </section>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="max-w-7xl mx-auto px-6 mt-40 md:mt-32 lg:mt-28 mb-10"
      >
        <ResponsiveCarousel />
      </div>

     
      <div data-aos="fade-up">
        <Destinations />
      </div>

      <div data-aos="fade-up">
        <Services />
      </div>

      <div data-aos="fade-up">
        <Accardion />
      </div>
      <div data-aos="fade-up">
        <Video />
      </div>

      <div data-aos="fade-up">
        <Pricing />
      </div>

      <div data-aos="fade-up">
        <MapSection />
      </div>

      <div data-aos="fade-up">
        <Zapros />
      </div>
    </>
  );
};

export default Hero;
