"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import React from "react";

type ContactFormData = {
  name: string;
  phoneNumber: string;
  message: string;
};

const ContactForm = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phoneNumber: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const router = useRouter();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const googleFormsEndpoint =
      "https://docs.google.com/forms/d/e/1FAIpQLSf7s6W-XvnfaPEBvtxGzkQ2DrwzqsR8ndOJMnhqVokkusD-2Q/formResponse"; // Replace with your Google Forms endpoint

    try {
      const formDataEncoded = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        const entryKey = `entry.${getEntryKey(key)}`;
        formDataEncoded.append(entryKey, value);
      });

      await fetch(googleFormsEndpoint, {
        method: "POST",
        body: formDataEncoded,
      });

      // Handle success
      router.push("/rsvp/success");
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    } catch (error) {
      // Handle submission error
      setShowPopup(true); // Show the pop-up
      // Wait for 3 seconds before redirecting to the homepage
      setTimeout(() => {
        router.push("/");
      }, 6000);
    }
  };

  const getEntryKey = (key: string) => {
    const entryKeys: Record<string, string> = {
      name: "208428600",
      phoneNumber: "1336455680",
      message: "265028106",
    };

    return entryKeys[key];
  };

  return (
    <div>
      <div>
        {/* Pop-up */}

        {showPopup && (
          <div className="p-5 rounded-xl bg-[#529864] text-white mx-auto my-8 z-50 shadow-md top-2/4 w-1/2 text-center font-sans">
            <h1 className="text-lg font-bold ">Thank You For Your Message</h1>
            <p>We Will Get Back To You Shortly</p>
          </div>
        )}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <label className=" flex text-lg mt-5">
          <h2 className="mr-[70px]">Name: </h2>

          <input
            placeholder="John Doe"
            className=" font-normal pl-3 rounded-lg text-black"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className=" flex text-lg mt-5">
          <h2 className="mr-3">Phone (WhatsApp): </h2>

          <input
            placeholder="+260 97 5818744"
            className=" font-normal pl-3 rounded-lg text-black"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
          />
        </label>

        <label className=" flex text-lg mt-5">
          <h2 className="mr-10">Message: </h2>

          <input
            placeholder="Type your message here"
            className=" font-normal pl-3 rounded-lg text-black pb-20"
            type="text"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </label>

        <div className="flex  justify-center my-20">
          <button
            className="px-5 py-2 bg-red-600 text-lg font-bold mb-3 text-white rounded-lg font-sans border-2 border-[#C4F6D1]"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
