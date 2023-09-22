// pages/shop.tsx

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

const ShopPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4 mt-10">
      <VegetableList vegetables={vegetables} />
    </div>
  );
};

export default ShopPage;
