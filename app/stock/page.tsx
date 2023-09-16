import Link from "next/link";
import React from "react";

const stock = () => {
  return (
    <div className="bg-tomato-field h-72 w-full bg-cover -z-50 mt-40 pt-10">
      <main className=" bg-[#161616] h-[480px] w-80 mx-auto rounded-t-3xl bg-opacity-90 text-white ml-72 ">
        <div className="p-10 uppercase">
          <h2 className="font-bold text-xs">Stock</h2>
          <h1 className="text-2xl font-bold">
            What is In <br />
            <span className=" font-thin">Season?</span>
          </h1>
          <section className="pt-10">
            <ul className="flex flex-col space-y-2 font-semibold text-lg">
              <li>Tomatoes</li>
              <li>Cabbage</li>
              <li>Beetroot</li>
              <li>Spinach</li>
              <li>Onion</li>
              <li>Butternut Squash</li>
              <Link href="/contact">
                <button className="bg-red-600 px-3 py-1 rounded-3xl text-white text-xs mt-5">
                  Contact Us
                </button>
              </Link>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
};

export default stock;
