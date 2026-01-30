import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import logosvg from "../../assets/logo.png";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  return (
    <header
      data-aos="fade-down"
      data-aos-duration="800"
      className="w-full h-[70px] flex items-center justify-between px-6 md:px-10
                 shadow-[0_8px_20px_rgba(0,0,0,0.12)]
                 sticky top-0 bg-blue-200 z-50"
    >
      
      <div className="flex items-center">
        <img src={logosvg} alt="Logo" className="h-12 w-auto" />
      </div>

   
      <nav className="hidden md:flex gap-8">
        {["home", "about", "contact", "tours"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
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

      
      <div className="hidden md:flex gap-2">
        {["uz", "ru", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            className="px-3.5 py-1.5 bg-white text-black font-bold
                       rounded-lg transition hover:bg-gray-200"
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

     
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden flex flex-col gap-1.5"
      >
        <span
          className={`w-6 h-0.5 bg-black transition ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-6 h-0.5 bg-black transition ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </button>

     
      {open && (
        <div
          data-aos="fade-down"
          className="absolute top-[70px] left-0 w-full bg-white shadow-lg
                     md:hidden"
        >
          <nav className="flex flex-col items-center gap-6 py-8">
            {["home", "about", "contact", "tours"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={() => setOpen(false)}
                className="text-lg font-medium text-black"
              >
                {t(`header.${item}`)}
              </a>
            ))}

            <div className="flex gap-3 pt-4">
              {["uz", "ru", "en"].map((lang) => (
                <button
                  key={lang}
                  onClick={() => {
                    i18n.changeLanguage(lang);
                    setOpen(false);
                  }}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
