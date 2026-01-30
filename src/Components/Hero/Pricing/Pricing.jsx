import React from "react";
import { useTranslation } from "react-i18next";

const Pricing = () => {
  const { t } = useTranslation();

  const plans = t("pricing.plans", { returnObjects: true });

  return (
    <section className="py-24 ">
      <div className="max-w-7xl mx-auto px-6">
        
     
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
