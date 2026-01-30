import React from "react";
import video from "../Video/highway-loop.mp4";

const Video = () => {
  return (
    <section
      data-aos="fade"
      data-aos-duration="1000"
      className="relative w-full h-screen overflow-hidden"
    >
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>

      <div
        data-aos="fade"
        data-aos-delay="200"
        className="absolute inset-0 bg-black/30"
      ></div>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        rel="noreferrer"
        className="absolute inset-0 z-10"
      ></a>
    </section>
  );
};

export default Video;
