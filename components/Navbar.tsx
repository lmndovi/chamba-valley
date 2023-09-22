import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <ul className="flex space-x-5 items-center text-xs font-semibold">
        <Link
          href="/"
          className=" hover:underline hover:decoration-4 hover:decoration-[#DC0D0D] hover:underline-offset-4"
        >
          <li>Home</li>
        </Link>

        <Link
          href="/shop"
          className=" hover:underline hover:decoration-4 hover:decoration-[#DC0D0D] hover:underline-offset-4"
        >
          <li>Shop</li>
        </Link>

        <Link
          href="/about"
          className=" hover:underline hover:decoration-4 hover:decoration-[#DC0D0D] hover:underline-offset-4"
        >
          <li>About</li>
        </Link>

        <Link href="/contact">
          <button className="bg-red-600 px-3 py-1 rounded-xl text-white">
            Contact
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
