"use client";

import React from "react";
import Navbar from "./Navbar";
import Logo from "./Logo";
import Image from "next/image";
import hero from "assets/hero.png";
import Headline from "./Headline";
import { useIsOpen } from "@/components/Context"; // Import the context

const Header = () => {
  const { isOpen } = useIsOpen(); // Access the context

  return (
    <div className="">
      <Image
        src={hero}
        className={`w-full ${
          isOpen ? "h-[470px]" : "h-96"
        } -z-20 transition-all duration-100 ease-in-out`}
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
