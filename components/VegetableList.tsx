import { frederickaTheGreat } from "@/fonts";
import Image from "next/image";
import React from "react";

type Vegetable = {
  name: string;
  price: number;
  iconPath: string;
};

type VegetableListProps = {
  vegetables: Vegetable[];
};

const VegetableList: React.FC<VegetableListProps> = ({ vegetables }) => {
  return (
    <div className={frederickaTheGreat.className}>
      <div className="bg-black-board bg-cover px-10 py-32 rounded-xl border-8 border-solid border-[#CAA472]">
        <h2 className="text-5xl font-semibold text-white tracking-[10px] text-center -mt-16 mb-16">
          In Stock
        </h2>
        <ul className="text-white px-24 text-lg grid grid-cols-2 gap-4">
          {vegetables.map((vegetable) => (
            <li
              key={vegetable.name}
              className="flex flex-col justify-center items-center  p-4 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={vegetable.iconPath}
                  alt={vegetable.name}
                  width={36}
                  height={36}
                />
                <span>{vegetable.name}</span>
              </div>

              <span>ZMW {vegetable.price.toFixed(2)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VegetableList;
