import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Image from "next/image";
import hero from "assets/hero.png";
import Headline from "./Headline";

const Header = () => {
  return (
    <div className="">
      <Image
        src={hero}
        className="w-full h-96 -z-20"
        alt="Chamba Valley Tomatoes"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="md:flex-row md:justify-between md:p-5  md:items-center flex flex-col  bg-opacity-50 pb">
          <Logo />
          <Navbar />
        </div>
        <div>
          <Headline />
        </div>
      </div>
    </div>
  );
};

export default Header;
