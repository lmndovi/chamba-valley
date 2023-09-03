import React from "react";
import logo from "assets/generic-logo.png";
import Image from "next/image";
import { alegreyaSansSC } from "@/fonts";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2 ">
      <Image src={logo} className="h-10 w-10" alt="Chamba Valley Farm" />
      <div className=" tracking-wider text-xl">
        <h1 className={alegreyaSansSC.className}>Chamba Valley Farm</h1>
      </div>
    </div>
  );
};

export default Logo;
