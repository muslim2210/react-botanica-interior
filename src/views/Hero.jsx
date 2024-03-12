// React
import { useState } from "react";

// local imports
import heroImage from "../assets/hero-image.svg";

import searchIcon from "../assets/search-icon.svg";

import { heroTitle, heroSubtitle } from "../data";

import FadeIn from "../components/FadeIn";

const Hero = () => {
  return (
    <>
      <div
        className="h-screen md:h-[90vh] xl:h-screen relative flex flex-col items-center bg-cover bg-no-repeat bg-center"
        style={{
          background: `url(${heroImage})`,
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <FadeIn delay={0.2} direction="down" padding fullWidth>
          <h1 className="mt-[130px] md:mt-[250px] xl:mt-[200px] 2xl:mt-[170px] text-center text-3xl tracking-wide leading-normal md:text-[64px] text-white max-w-[1000px]">
            {heroTitle}
          </h1>
        </FadeIn>
        <FadeIn delay={0.4} direction="down" padding fullWidth>
          <h1 className="mt-8 2xl:mt-4 text-center text-lg md:text-2xl text-white max-w-[500px]">
            {heroSubtitle}
          </h1>
        </FadeIn>
        <FadeIn delay={0.2} direction="up" padding fullWidth>
          <div className="relative w-full xs:w-[460px] mt-11 2xl:mt-5">
            <input
              type="text"
              placeholder="search"
              className="rounded-full w-full pl-6 pr-[68px] py-4 bg-gray-300 outline-none text-black text-base xs:text-lg placeholder-black"
            />
            <img
              src={searchIcon}
              alt=""
              className="absolute top-2/4 -translate-y-2/4 right-3 h-11 w-11 cursor-pointer"
            />
          </div>
        </FadeIn>

        <div className="absolute h-[50px] xs:h-[150px] bottom-0 w-full bg-[linear-gradient(180deg,_#ffffff00_0%,_#FFF_100%)]" />
      </div>
    </>
  );
};

export default Hero;
