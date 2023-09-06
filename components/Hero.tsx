import React from "react";
import HeroCards from "./HeroCards";

const Hero = () => {
  return (
    <div className="text-center mt-32 space-y-1 p-5">
      <div>
        <h2 className="uppercase text-sm font-bold text-[#DC0D0D] ">
          What We Do
        </h2>
      </div>
      <div className="">
        <h1 className="text-2xl uppercase mb-5">
          <span className="font-bold">Tomato Farm Using High Technology</span>
          <br />
          And Solar Energy System
        </h1>
      </div>
      <div>
        <p className="text-xs">
          We are a local farm specialising in modern environmentally friendly
          farming
        </p>
      </div>
      <div className="py-12">
        <HeroCards />
      </div>
    </div>
  );
};

export default Hero;
