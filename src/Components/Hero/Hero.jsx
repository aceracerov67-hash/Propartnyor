import React from "react";
import heroBg from "../../assets/banner.png";
// import carousel from "../../const/carousel/carousel.jsx";
import ResponsiveCarousel from "../../const/carousel";

const Hero = () => {
  return (
 <>
  
    <section
      className="relative w-full h-[650px] bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* HERO CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6 h-full flex items-center">
        <div className="max-w-xl text-white">
          {/* blue line */}
          <span className="block w-20 h-1 bg-blue-500 mb-6"></span>

          <h1 className="text-5xl font-light mb-6">
            Want to travel?
          </h1>

          <p className="text-lg leading-relaxed mb-8">
            Turn your travel dreams into reality: plan, explore,
            and create unforgettable memories.
          </p>

          <button
            className="
              bg-blue-500
              text-white
              px-6 py-3
              font-medium
              hover:bg-blue-600
              transition
            "
          >
            Learn more
          </button>
        </div>
      </div>

      {/* FORM (pastda, ustiga chiqib turadi) */}
      <div className="absolute left-1/2 -translate-x-1/2 -bottom-12 w-full px-6">
        <form
          onSubmit={(e) => e.preventDefault()}
          className="
            max-w-6xl mx-auto
            flex flex-col md:flex-row
            bg-white
            rounded-md
            shadow-xl
            overflow-hidden
          "
        >
          <input
            type="text"
            placeholder="Your name..."
            className="w-full px-6 py-4 outline-none border-r"
          />

          <input
            type="text"
            placeholder="Your address..."
            className="w-full px-6 py-4 outline-none border-r"
          />

          <div className="flex items-center px-6 py-4 border-r gap-3">
            <input type="date" className="outline-none text-gray-600" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10m-11 9h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>

          <button
            type="submit"
            className="
              bg-[#4f83ff]
              text-white
              px-10 py-4
              font-semibold
              hover:bg-blue-600
              transition
              whitespace-nowrap
            "
          >
            Book a place
          </button>
        </form>
      </div>
    </section>
   

   


{/* <main>
 
  
</main> */}

    {/* <div className="max-w-7xl mx-auto px-6 m-4 ">
      <ResponsiveCarousel />
    </div> */}


    <div className="max-w-7xl mx-auto px-6 mt-40 md:mt-32 lg:mt-28 mb-10">
  <ResponsiveCarousel />
</div>

 </>

  );
};

export default Hero;