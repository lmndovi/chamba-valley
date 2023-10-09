// pages/shop.tsx

import CropList from "@/components/CropList";
import VegetableList from "@/components/VegetableList";
import React from "react";

const vegetables = [
  {
    name: "Tomatoes",
    price: 2500.99,
    iconPath: "/tomato.svg",
  },
  { name: "Carrots", price: 199.99, iconPath: "/carrot.svg" },
  { name: "Broccoli", price: 2000.49, iconPath: "/broccoli.svg" },
  { name: "Lettuce", price: 1500.29, iconPath: "/lettuce.svg" },
];

const crops = [
  {
    name: "Papaya",
    harvestDate: new Date("2023-10-15"),
    iconPath: "/papaya.svg",
  },
  {
    name: "Avocadoes",
    harvestDate: new Date("2023-11-18"),
    iconPath: "/avocado.svg",
  },
  {
    name: "Mango",
    harvestDate: new Date("2023-12-23"),
    iconPath: "/mango.svg",
  },
];

const ShopPage: React.FC = () => {
  return (
    <div className="container flex flex-col space-y-8 mx-auto p-4 mt-20 mb-20 bg-black-board bg-cover  pt-28 rounded-xl border-8 border-solid border-[#CAA472] w-[400px] md:w-[700px]">
      <VegetableList vegetables={vegetables} />
      <CropList crops={crops} />
    </div>
  );
};

export default ShopPage;
