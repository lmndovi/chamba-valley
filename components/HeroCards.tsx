import Image from "next/image";
import React from "react";
import tomato from "assets/tomato.png";
import Link from "next/link";

const HeroCards = () => {
  return (
    <div className="space-y-3">
      <div className="flex items-center w-full p-2 space-x-3">
        <div className="h-60 p-5 shadow-2xl rounded-lg space-y-2">
          <Image src={tomato} className=" h-16 w-16 mx-auto" alt="tomato" />
          <h1 className="font-bold">Healthy Tomatoes</h1>
          <p className="text-xs">
            We only sell the very best tomatoes. They are grown on site by local
            people. We don't cut corners
          </p>
        </div>
        <div className="h-60 p-5 shadow-2xl rounded-lg space-y-2">
          <Image src={tomato} className=" h-16 w-16 mx-auto" alt="tomato" />
          <h1 className="font-bold">Healthy Tomatoes</h1>
          <p className="text-xs">
            We only sell the very best tomatoes. They are grown on site by local
            people. We don't cut corners
          </p>
        </div>
        <div className="h-60 p-5 shadow-2xl rounded-lg space-y-2">
          <Image src={tomato} className=" h-16 w-16 mx-auto" alt="tomato" />
          <h1 className="font-bold">Healthy Tomatoes</h1>
          <p className="text-xs">
            We only sell the very best tomatoes. They are grown on site by local
            people. We don't cut corners
          </p>
        </div>
      </div>

      <div>
        <Link href="/about">
          <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HeroCards;
