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
        className="w-full h-80 -z-20"
        alt="Chamba Valley Tomatoes"
      />
      <div className="absolute top-0 left-0 w-full">
        <div className="flex justify-between p-5  items-center">
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
