import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiFillTag,
  AiFillFire
} from "react-icons/ai";
import { BsFillCartFill } from "react-icons/bs";
import { MdFavorite, MdHelp } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";

function NavBar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="h-16 max-w-[1640px] mx-auto flex justify-between items-center p-4">
      <div className="flex items-center pt-1">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <Link to="/">
        <h1 className="text-2xl ml-4 sm:text-3xl lg:text-4xl px-2">
          Rosy <span className="font-bold">FASHION</span>
        </h1>
        </Link>
      </div>

      <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px] pt-1">
        <AiOutlineSearch size={25} />
        <input
          type="text"
          className="bg-transparent p-2 w-full focus:outline-none"
          placeholder="Pesquisar Modelo"
        />
      </div>

      <div>
        <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full">
          <BsFillCartFill size={20} /> Carrinho
        </button>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4">
          Rosy <span className="font-bold">FASHION</span>
        </h2>

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favoritos
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" />
              Promoções
            </li>
            <li className="text-xl py-4 flex">
              <AiFillFire size={25} className="mr-4" /> Mais Quentes
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" />
              Contato
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" />
              Ajuda
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
