import React from "react";

const Headline = () => {
  return (
    <section className="p-5 text-left space-y-2">
      <div>
        <p className="text-[#DC0D0D] text-sm font-bold uppercase">
          The Home of Fresh Produce
        </p>
      </div>
      <header className="w-[400px]">
        <h1 className="uppercase tracking-tight text-2xl">
          We Grow <span className="font-bold">Healthy Tomatoes</span> Using
          Local Technology
        </h1>
      </header>
      <div>
        <button className="bg-[#DC0D0D] px-3 py-1 rounded-xl text-white text-xs">
          This Week's Stock
        </button>
      </div>
    </section>
  );
};

export default Headline;
