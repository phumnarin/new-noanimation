import React from "react";
import { Link } from "react-router-dom";
import { MdFiberNew } from "react-icons/md";

function Nav({ fav }) {
  return (
    <nav className="relative flex justify-center items-center bg-gray-800 ">
      <div className="absolute left-2 inline-flex items-center text-white px-4 ">
        <MdFiberNew className="sm:text-4xl md:text-5xl lg:text-6xl"/> <span className="ml-2 sm:text-l md:text-xl lg:text-2xl">N.E.W.</span>
      </div>
      <Link
        to="/"
        className="text-white hover:bg-gray-600 px-4  sm:py-3 md:py-4 lg:py-5 "
      >
        Home
      </Link>
      <Link
        to="/favorite"
        className="text-white hover:bg-gray-600 px-4  sm:py-3 md:py-4 lg:py-5"
      >
        Favorite
      </Link>
      <Link
        to="/about"
        className="text-white hover:bg-gray-600 px-4  sm:py-3 md:py-4 lg:py-5"
      >
        About
      </Link>
      <Link
        to="/contact"
        className="text-white hover:bg-gray-600 px-4  sm:py-3 md:py-4 lg:py-5"
      >
        Contact
      </Link>
    </nav>
  );
}

export default Nav;
