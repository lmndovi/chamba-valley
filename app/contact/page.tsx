import ContactForm from "@/components/ContactForm";
import React from "react";

const contact = () => {
  return (
    <div className="bg-tomato-field h-72 w-full bg-cover -z-50 mt-40 pt-10">
      <main className=" bg-[#161616] h-[660px] w-[420px] mx-auto rounded-t-3xl bg-opacity-90 text-white ml-72 -mt-36">
        <div className="p-10 uppercase">
          <h2 className="font-bold text-xs">How</h2>
          <h1 className="text-2xl font-bold">
            Can We Help <br />
            <span className=" font-thin">You?</span>
          </h1>
          <ContactForm />
        </div>
      </main>
    </div>
  );
};

export default contact;
