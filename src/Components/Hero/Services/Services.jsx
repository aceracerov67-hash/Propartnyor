// import React from "react";
// import { useTranslation } from "react-i18next";

// import experienceImg from "../../../assets/service_icon_1.svg";
// import routesImg from "../../../assets/service_icon_2.svg";
// import itinerariesImg from "../../../assets/service_icon_3.svg";

// const images = [experienceImg, routesImg, itinerariesImg];

// const Services = () => {
//   const { t } = useTranslation();
//   const cards = t("services.cards", { returnObjects: true });

//   return (
//     <section className="py-20">
//       <div className="max-w-7xl mx-auto px-6">
        
//         <div className="text-center mb-16">
//           <p className="text-blue-500 text-sm mb-2">
//             {t("services.label")}
//           </p>
//           <h2 className="text-3xl md:text-4xl font-semibold">
//             {t("services.title")}
//           </h2>
//         </div>

        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {cards.map((item, index) => (
//             <div
//               key={index}
//               className="
//                 border border-black-500 rounded-2xl p-10 text-center
//                 transition-all duration-500
//                 hover:shadow-xl hover:-translate-y-2 bg-white
//               "
//             >
              
//               <div className="flex justify-center mb-6">
//                 <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center">
//                   <img
//                     src={images[index]}
//                     alt={item.title}
//                     className="w-12 h-12 object-contain"
//                   />
//                 </div>
//               </div>

//               <h3 className="text-xl font-semibold mb-4">
//                 {item.title}
//               </h3>

//               <p className="text-gray-600 leading-relaxed">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;


import React from "react";
import { useTranslation } from "react-i18next";

import experienceImg from "../../../assets/service_icon_1.svg";
import routesImg from "../../../assets/service_icon_2.svg";
import itinerariesImg from "../../../assets/service_icon_3.svg";

const images = [experienceImg, routesImg, itinerariesImg];

const Services = () => {
  const { t } = useTranslation();
  const cards = t("services.cards", { returnObjects: true });

  return (
    <section
      id="tours"
      className="py-20  scroll-mt-[80px]"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-500 text-sm mb-2">
            {t("services.label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold">
            {t("services.title")}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className="border border-black-500 rounded-2xl p-10 text-center
                         transition-all duration-500
                         hover:shadow-xl hover:-translate-y-2 bg-white"
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full border border-blue-200 flex items-center justify-center">
                  <img
                    src={images[index]}
                    alt={item.title}
                    className="w-12 h-12 object-contain"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
