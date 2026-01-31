import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logosvg from "../../assets/logo.png";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="800"
      className="w-full h-[70px] flex items-center justify-between px-10
                 shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                 sticky top-0 bg-blue-200 z-50"
    >
      {/* LOGO */}
      <div
        data-aos="fade-right"
        data-aos-delay="100"
        className="flex items-center"
      >
        <img src={logosvg} alt="Logo" className="h-12 w-auto" />
      </div>

      {/* DESKTOP NAV */}
      <nav className="hidden md:flex gap-8">
        {["home", "about", "contact", "tours"].map((item, index) => (
          <a
            key={item}
            href={`#${item}`}
            data-aos="fade-down"
            data-aos-delay={200 + index * 100}
            className="relative text-black text-lg
                       after:content-[''] after:absolute after:left-0
                       after:-bottom-1.5 after:w-0 after:h-[2px]
                       after:bg-blue-500 after:transition-all
                       hover:after:w-full"
          >
            {t(`header.${item}`)}
          </a>
        ))}
      </nav>

      {/* DESKTOP LANGUAGE */}
      <div
        data-aos="fade-left"
        data-aos-delay="300"
        className="hidden md:flex gap-2"
      >
        {["uz", "ru", "en"].map((lang, index) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            data-aos="zoom-in"
            data-aos-delay={400 + index * 100}
            className="px-3.5 py-1.5 bg-white text-black font-bold
                       rounded-lg transition-all duration-300
                       hover:bg-gray-200 hover:-translate-y-0.5"
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

      {/* BURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-black"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        {open ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* MOBILE MENU */}
      {open && (
        <div
          data-aos="fade-down"
          data-aos-duration="500"
          className="absolute top-[70px] left-0 w-full bg-blue-200
                     flex flex-col items-center gap-6 py-6
                     shadow-lg md:hidden"
        >
          {["home", "about", "contact", "tours"].map((item, index) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              data-aos="fade-up"
              data-aos-delay={100 + index * 100}
              className="text-black text-lg font-semibold"
            >
              {t(`header.${item}`)}
            </a>
          ))}

          <div className="flex gap-3 pt-2">
            {["uz", "ru", "en"].map((lang, index) => (
              <button
                key={lang}
                onClick={() => {
                  i18n.changeLanguage(lang);
                  setOpen(false);
                }}
                data-aos="zoom-in"
                data-aos-delay={400 + index * 100}
                className="px-4 py-1.5 bg-white font-bold rounded-lg"
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
