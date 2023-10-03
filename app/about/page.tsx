import Image from "next/image";
import Link from "next/link";
import React from "react";
import veg from "@/assets/veg-2.jpg";
import ImageCarousel from "@/components/carousel/ImageCarousel";
import HeroCards from "@/components/HeroCards";

const about = () => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 p-6 md:pt-28 md:gap-2">
        <div className="p-4">
          <div className="flex flex-col  p-5 space-y-3">
            <div className="">
              <h2 className="font-bold uppercase text-xs">About Us</h2>
              <h1 className="uppercase text-xl font-light">See What We Sell</h1>
              <h1 className="text-[#DC0D0D] uppercase font-bold text-xl -ml-1">
                "Healthy Tomatoes"
              </h1>
            </div>
            <div className="space-y-6">
              <p className="text-sm">
                When our tomatoes grow to size, they are sent to our on site
                shop. We will have completed our job with care.
              </p>
              <p className="text-xs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
                accusantium rerum voluptas neque aut libero tempora id molestias
                non, at natus magnam impedit dolorem sequi est nemo delectus
                earum similique?
              </p>
              <p className="text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                blanditiis quasi, asperiores vel doloremque et magnam suscipit
                consectetur laudantium reprehenderit corporis eos illo nobis,
                voluptates, temporibus quod sit id earum?
              </p>
            </div>
            <Link href="/stock">
              <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs">
                Contact
              </button>
            </Link>
          </div>
        </div>
        <div className="p-4">
          <Image src={veg} alt="Vegetables" className="rounded-lg h-96 w-fit" />
        </div>
      </div>
      <div className="flex flex-col mx-auto py-10 h-96 w-[500px]">
        <HeroCards />
      </div>
    </div>
  );
};

export default about;
