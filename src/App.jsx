import React from "react";
import Layout from "./Components/Layout/Layout";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
AOS.init({
  duration: 900,
  easing: "ease-out-cubic",
  once: true,
});
  return (
   <>
    <div className="min-h-screen">
      <div className="container mx-auto">
        <div className="bg-blue-500/20 rounded-xl">
          <Layout />
        </div>
      </div>
    </div>
      
   </>
    
  );
};

export default App;
