import React from "react";

const MapSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

      
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

        <div className="text-center mt-16">
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-blue-500 text-sm mb-3"
          >
            Biz bilan o‘z joyingizni band qiling!
          </p>

          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-3xl md:text-4xl font-semibold mb-8"
          >
            Ta'tilingizni biz bilan o‘tkazing
          </h2>

          <button
            data-aos="zoom-in"
            data-aos-delay="300"
            className="bg-blue-500 text-white px-10 py-3 rounded-md
                       font-medium transition hover:bg-blue-600"
          >
            Joy Band Qilish
          </button>
        </div>

      </div>
    </section>
  );
};

export default MapSection;
