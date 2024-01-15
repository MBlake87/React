import React from "react";
import Main from "../images/main.jpg";
import { useState, useEffect } from "react";

function Hero() {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth < 568) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleWindowResize);

    return window.removeEventListener("resize", handleWindowResize);
  }, [isMobile]);

  return (
    <div className=" bg-gray-100 py-5">
      <div className="bg-blue-100 rounded-lg flex flex-col pl-5 h-[75vh] mx-5">
        {isMobile ? "" : <img className="pt-1 w-[95%]" src={Main} alt="main" />}
        <h1
          className="text-[52px] mt-5 tracking-[.25rem] font-bold font-victor "
          id="home"
        >
          AntiWare
        </h1>
        <p className="text-left mt-10 font-victor leading-[2rem] w-[50%]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          voluptatem iusto fuga animi quod atque.
        </p>
        <button className="bg-yellow-200 font-victor hover:bg-yellow-200 text-black border border-black mt-5 font-bold py-2 px-4 rounded-full w-[50%]">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
