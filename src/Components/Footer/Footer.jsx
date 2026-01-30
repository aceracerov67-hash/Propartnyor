import React from "react";
import { useTranslation } from "react-i18next";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaTelegramPlane,
} from "react-icons/fa";

import footerLogo from "../../assets/logoFooter.png";

const Footer = () => {
  const { t } = useTranslation();

  const linksLeft = t("footer.linksLeft", { returnObjects: true });
  const linksRight = t("footer.linksRight", { returnObjects: true });

  return (
    <footer className="bg-white pt-24 pb-10 border-t">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">


          <div data-aos="fade-up">
            <img
              src={footerLogo}
              alt="Propartnyor JS"
              className="h-20 mb-6"
            />

            <p className="text-gray-600 mb-6 max-w-sm">
              {t("footer.description")}
            </p>

            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full bg-gray-200 text-gray-600
                           hover:bg-blue-500 hover:text-white transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full bg-gray-200 text-gray-600
                           hover:bg-blue-500 hover:text-white transition"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.instagram.com/fxatamova13/"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full bg-gray-200 text-gray-600
                           hover:bg-blue-500 hover:text-white transition"
              >
                <FaInstagram />
              </a>

              <a
                href="https://t.me/FX1_09"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 flex items-center justify-center
                           rounded-full bg-gray-200 text-gray-600
                           hover:bg-blue-500 hover:text-white transition"
              >
                <FaTelegramPlane />
              </a>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="150">
            <h3 className="text-xl font-semibold mb-6">
              {t("footer.linksTitle")}
            </h3>

            <div className="grid grid-cols-2 gap-4 text-gray-600">
              <ul className="space-y-3">
                {linksLeft.map((item, i) => (
                  <li key={i}>▪ {item}</li>
                ))}
              </ul>

              <ul className="space-y-3">
                {linksRight.map((item, i) => (
                  <li key={i}>▪ {item}</li>
                ))}
              </ul>
            </div>
          </div>

          
          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold mb-6">
              {t("footer.contactTitle")}
            </h3>

            <p className="text-gray-600 mb-6">
              {t("footer.contactText")}
            </p>

            <ul className="space-y-4 text-gray-600">
              <li>
                <span className="font-medium">
                  {t("footer.phone")}:
                </span>{" "}
                <a href="tel:+998974420308" className="text-blue-500">
                  +998 97 442 03 08
                </a>
              </li>

              <li>
                <span className="font-medium">
                  {t("footer.email")}:
                </span>{" "}
                <a
                  href="mailto:saidolimov11223@gmail.com"
                  className="text-blue-500"
                >
                  saidolimov11223@gmail.com
                </a>
              </li>

              <li>
                <span className="font-medium">
                  {t("footer.address")}:
                </span>{" "}
                <a
                  href="https://maps.google.com/?q=Labzak+76+Tashkent"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500"
                >
                  Labzak 76, Tashkent
                </a>
              </li>
            </ul>
          </div>

        </div>

       
        <div
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-20 text-center text-gray-500 text-sm"
        >
          © {new Date().getFullYear()} Propartnyor JS.{" "}
          {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
