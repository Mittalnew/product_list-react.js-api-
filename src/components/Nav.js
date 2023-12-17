import React from "react";
import { FaSearch, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import CardList from "./CardList";

const Nav = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4 flex items-center justify-between">
        <div className="text-white font-bold text-lg ml-[10rem]">
          <span className="text-blue-500">SHOP</span>LANE
        </div>

        <div className="flex gap-[4rem]">
          <a href="#" className="text-white">
            Home
          </a>
          <a href="#" className="text-white">
            Clothing
          </a>
          <a href="#" className="text-white">
            Accessories
          </a>
        </div>

        <div className="flex gap-[2rem] items-center mr-[10rem]">
          <FaSearch className="text-white text-lg cursor-pointer" />
          <FaShoppingCart className="text-white text-lg cursor-pointer" />
          <FaUserCircle className="text-white text-lg cursor-pointer" />
        </div>
      </nav>
      <div>
        <div className="ml-20 mt-5">
          <h1 className="font-bold text-xl">Clothing For Men and Women</h1>
        </div>{" "}
        <CardList />
      </div>
    </div>
  );
};

export default Nav;
