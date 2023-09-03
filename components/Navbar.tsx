import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex space-x-5 items-center text-xs font-semibold">
        <li>Home</li>
        <li>About Us</li>
        <li>Products</li>
        <button className="bg-red-600 px-3 py-1 rounded-xl text-white">
          Contact
        </button>
      </ul>
    </div>
  );
};

export default Navbar;
