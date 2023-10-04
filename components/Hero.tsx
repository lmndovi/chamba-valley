import React from "react";
import HeroCards from "./HeroCards";
import ImageCarousel from "./carousel/ImageCarousel";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="text-center mt-20 space-y-1 p-5">
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
      <div className="flex flex-col mx-auto py-10 h-96 w-full md:w-[600px] md:object-fit">
        <ImageCarousel />
      </div>
      <div>
        <Link href="/about">
          <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs -mt-20">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
