import { frederickaTheGreat } from "@/fonts";
import Image from "next/image";
import React from "react";

import { Vegetable } from "@/types";

type VegetableListProps = {
  vegetables: Vegetable[];
};

const VegetableList: React.FC<VegetableListProps> = ({ vegetables }) => {
  return (
    <div className={frederickaTheGreat.className}>
      <div>
        <h2 className="text-[60px] font-semibold text-white tracking-[10px] text-center -mt-16 mb-16">
          Farm Shop
        </h2>
        <section className="mb-5">
          <h3 className="text-white text-center text-xl underline">
            Currently In Stock
          </h3>
          <ul className="text-white px-24">
            {vegetables.map((vegetable) => (
              <li
                key={vegetable.name}
                className="flex justify-center items-center  p-2 rounded-lg space-x-20"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={vegetable.iconPath}
                    alt={vegetable.name}
                    width={36}
                    height={36}
                  />
                  <span className=" uppercase">{vegetable.name}</span>
                </div>

                <span className="text-lg tracking-wide">
                  ZMW {vegetable.price.toFixed(2)}
                </span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default VegetableList;
