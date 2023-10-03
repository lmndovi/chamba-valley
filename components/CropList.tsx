import { frederickaTheGreat } from "@/fonts";
import { Crop } from "@/types";
import Image from "next/image";
import React from "react";

type CropListProps = {
  crops: Crop[];
};

const CropList: React.FC<CropListProps> = ({ crops }) => {
  return (
    <div className={frederickaTheGreat.className}>
      <section className="mb-5 text-white">
        <h3 className="text-white text-center text-xl underline">
          Preparing in the field
        </h3>
        <ul className="text-white px-24">
          {crops.map((crop) => (
            <li
              key={crop.name}
              className="flex justify-center items-center  p-2 rounded-lg space-x-20"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={crop.iconPath}
                  alt={crop.name}
                  width={36}
                  height={36}
                />
                <span className=" uppercase">{crop.name}</span>
              </div>

              <span className="text-lg">
                Harvest Date: {crop.harvestDate.toLocaleDateString()}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default CropList;
