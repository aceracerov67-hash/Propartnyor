// import React from "react";

// const plans = [
//   {
//     tag: "Asosiy Sayohatchi",
//     title: "Biz bilan bog'laning",
//     type: "/individual",
//     features: [
//       "Moslashtirilgan Sayohat Rejasi",
//       "Shakllantirilgan Manzil Qo'llanmalar",
//       "Mutaxassis Bilan Sayohat Muhokamasi",
//       "24/7 Xizmat Ko'rsatish",
//       "Moslashuvchan Narxlar",
//     ],
//   },
//   {
//     tag: "Premium Sayohatchi",
//     title: "Biz bilan bog'laning",
//     type: "/individual",
//     features: [
//       "Luks Mehmonxona Joylashuvi",
//       "Maxsus Tajribalar",
//       "Maxsus Yo'lboshlovchi",
//       "Moslashtirilgan Sayohat Paketlari",
//       "Muzokaralar uchun Narxlar",
//     ],
//     active: true,
//   },
//   {
//     tag: "Maksimal Sayohatchi",
//     title: "Biz bilan bog'laning",
//     type: "/individual",
//     features: [
//       "VIP Sayohat Dasturi",
//       "Maxsus Lyuks Tajribalar",
//       "Moslashuvchan va Muzokaralar uchun Narxlar",
//       "Ajoyib Taassurotlar",
//     ],
//   },
// ];

// const Pricing = () => {
//   return (
//     <section className="py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-6">
        
       
//         <div className="text-center mb-16">
//           <p
//             data-aos="fade-up"
//             className="text-blue-500 text-sm mb-2"
//           >
//             Maxsus Takliflar
//           </p>
//           <h2
//             data-aos="fade-up"
//             data-aos-delay="150"
//             className="text-3xl md:text-4xl font-semibold"
//           >
//             O'zingiz orzu qilgan ta'tilni tanlang
//           </h2>
//         </div>

       
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {plans.map((plan, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={200 + index * 150}
//               className={`
//                 rounded-2xl overflow-hidden
//                 shadow-lg transition-all duration-500
//                 hover:-translate-y-3 hover:shadow-2xl
//                 ${plan.active ? "ring-2 ring-blue-500" : ""}
//               `}
//             >
              
//               <div className="bg-blue-500 text-white text-center p-8">
//                 <p className="text-sm mb-3 opacity-90">
//                   {plan.tag}
//                 </p>
//                 <h3 className="text-2xl font-semibold mb-2">
//                   {plan.title}
//                 </h3>
//                 <p className="text-sm opacity-90">
//                   {plan.type}
//                 </p>
//               </div>

            
//               <div className="bg-gray-100 p-8 text-center">
//                 <ul className="space-y-4 text-gray-700 text-sm mb-8">
//                   {plan.features.map((item, i) => (
//                     <li key={i}>{item}</li>
//                   ))}
//                 </ul>

//                 <button
//                   data-aos="zoom-in"
//                   data-aos-delay={400 + index * 150}
//                   className="bg-blue-500 text-white px-8 py-3 rounded-md
//                              font-medium transition hover:bg-blue-600"
//                 >
//                   Bog'lanish
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Pricing;



import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  // 🔑 i18n dan planlarni olish
  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <div className="text-center mb-16">
          <p
            data-aos="fade-up"
            className="text-blue-500 text-sm mb-2"
          >
            {t("pricing.label")}
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="150"
            className="text-3xl md:text-4xl font-semibold"
          >
            {t("pricing.title")}
          </h2>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={200 + index * 150}
              className={`
                rounded-2xl overflow-hidden
                shadow-lg transition-all duration-500
                hover:-translate-y-3 hover:shadow-2xl
                ${plan.active ? "ring-2 ring-blue-500" : ""}
              `}
            >
              {/* TOP */}
              <div className="bg-blue-500 text-white text-center p-8">
                <p className="text-sm mb-3 opacity-90">
                  {plan.tag}
                </p>

                <h3 className="text-2xl font-semibold mb-2">
                  {plan.title}
                </h3>

                <p className="text-sm opacity-90">
                  {plan.type}
                </p>
              </div>

              {/* BODY */}
              <div className="bg-gray-100 p-8 text-center">
                <ul className="space-y-4 text-gray-700 text-sm mb-8">
                  {plan.features.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                <button
                  data-aos="zoom-in"
                  data-aos-delay={400 + index * 150}
                  className="bg-blue-500 text-white px-8 py-3 rounded-md
                             font-medium transition hover:bg-blue-600"
                >
                  {t("pricing.button")}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Pricing;
