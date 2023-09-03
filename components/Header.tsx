import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Image from "next/image";
import hero from "assets/Hero-2.png";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between p-5">
        <Logo />
        <Navbar />
      </div>
      <div>
        <Image
          src={hero}
          className="top-0 fixed w-full h-80 -z-50"
          alt="Chamba Valley Tomatoes"
        />
      </div>
    </div>
  );
};

export default Header;
