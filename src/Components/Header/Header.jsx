// import React from 'react'
// import { useTranslation } from "react-i18next";
// const Header = () => {
//  const { t, i18n } = useTranslation();

//   return (
//     <>
//       <header className="header">
//         <div className="logo">MySite</div>

//         <nav className="nav">
//           <a href="#home">{t("header.home")}</a>
//           <a href="#about">{t("header.about")}</a>
//           <a href="#contact">{t("header.contact")}</a>
//         </nav>

//         <div className="lang">
//           <button onClick={() => i18n.changeLanguage("uz")}>UZ</button>
//           <button onClick={() => i18n.changeLanguage("ru")}>RU</button>
//           <button onClick={() => i18n.changeLanguage("en")}>EN</button>
//         </div>
//       </header>
//     </>
//   );
// }

// export default Header
//  w-full h-[70px]  bg-gradient-to-br from-sky-300 to-sky-500 flex items-center justify-between px-10 shadow-lg

import React from "react";
import { useTranslation } from "react-i18next";
import logosvg from '../../assets/logo.png';

const Header = () => {
  const { t, i18n } = useTranslation();

  return (
    <header className="w-full h-[70px]
  flex items-center justify-between
  px-10
  shadow-[0_8px_20px_rgba(0,0,0,0.12)]">

          <div className="flex items-center">
              <img
                src={logosvg}
                alt="MySite Logo"
                className="h-15 w-auto"
              />
            </div>

      <nav className="flex gap-8">
        {["home", "about", "contact", "tours"].map((item) => (
          <a
            key={item}
            href={`#${item}`}
            className="relative text-black text-lg after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
          >
            {t(`header.${item}`)}
          </a>
        ))}
      </nav>

      <div className="flex gap-2">
        {["uz", "ru", "en"].map((lang) => (
          <button
            key={lang}
            onClick={() => i18n.changeLanguage(lang)}
            className="px-3.5 py-1.5 bg-white text-black font-bold rounded-lg transition-all duration-300 hover:bg-gray-200 hover:-translate-y-0.5"
          >
            {lang.toUpperCase()}
          </button>
        ))}
      </div>

    </header>
  );
};

export default Header;
