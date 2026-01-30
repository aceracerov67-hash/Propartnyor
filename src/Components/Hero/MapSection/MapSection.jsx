// import React from "react";
// import { useTranslation } from "react-i18next";

// const MapSection = () => {
//   const { t } = useTranslation();

//   return (
//     <section id="contact" className="py-24">
//       <div className="max-w-7xl mx-auto px-6">

       
//         <div
//           data-aos="fade-up"
//           data-aos-duration="900"
//           className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
//         >
//           <iframe
//             title="Google Map"
//             src="https://www.google.com/maps?q=Labzak%2076,%20Tashkent&output=embed"
//             className="w-full h-full border-0"
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//         </div>

   
//         <div className="text-center mt-16">
//           <p
//             data-aos="fade-up"
//             data-aos-delay="100"
//             className="text-blue-500 text-sm mb-3"
//           >
//             {t("map.subtitle")}
//           </p>

//           <h2
//             data-aos="fade-up"
//             data-aos-delay="200"
//             className="text-3xl md:text-4xl font-semibold mb-8"
//           >
//             {t("map.title")}
//           </h2>

//           <button
//             data-aos="zoom-in"
//             data-aos-delay="300"
//             className="bg-blue-500 text-white px-10 py-3 rounded-md
//                        font-medium transition hover:bg-blue-600"
//           >
//             {t("map.button")}
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default MapSection;



import React from "react";
import { useTranslation } from "react-i18next";

const MapSection = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-24 scroll-mt-[80px]">
      <div className="max-w-7xl mx-auto px-6">

        {/* MAP */}
        <div
          data-aos="fade-up"
          data-aos-duration="900"
          className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            title="Google Map"
            src="https://www.google.com/maps?q=Labzak%2076,%20Tashkent&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* TEXT */}
        <div className="text-center mt-16">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-blue-500 text-sm mb-3"
          >
            {t("map.subtitle")}
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-semibold mb-8"
          >
            {t("map.title")}
          </h2>

          <button
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-blue-500 text-white px-10 py-3 rounded-md
                       font-medium transition hover:bg-blue-600"
          >
            {t("map.button")}
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          
          <div data-aos="fade-up" data-aos-delay="350">
            <p className="text-gray-500 text-sm mb-1">
              {t("map.phoneLabel")}
            </p>
            <a
              href={`tel:${t("map.phoneValue")}`}
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {t("map.phoneValue")}
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <p className="text-gray-500 text-sm mb-1">
              {t("map.emailLabel")}
            </p>
            <a
              href={`mailto:${t("map.emailValue")}`}
              className="text-lg font-semibold text-blue-600 hover:underline"
            >
              {t("map.emailValue")}
            </a>
          </div>

          <div data-aos="fade-up" data-aos-delay="450">
            <p className="text-gray-500 text-sm mb-1">
              {t("map.addressLabel")}
            </p>
            <p className="text-lg font-semibold text-gray-700">
              {t("map.addressValue")}
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default MapSection;
