import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <>
      <header
        className="flex items-center justify-between  
      bg-linear-to-r from-pink-200 to-pink-600 px-6 py-4 gap-6"
      >
        <div className="text-xl cursor-pointer font-extrabold text-gray-800 hover:text-gray-600 ">
          <Link href="/">Luxury Stays</Link>
        </div>
        <nav className="flex items-center gap-6">
          <Link
            href="/"
            className="relative group transition-colors duration-300 text-gray-900 hover:text-gray-400/80 font-bold text-xl cursor-pointer"
          >
            Home
          </Link>

          <Link
            href="/about"
            className=" text-indigo-900 hover:text-indigo-600 transition-all duration-300 font-bold text-xl cursor-pointer"
          >
            About
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
