import React, { useState } from "react";
import Link from "next/link";

import { AiOutlineBars } from 'react-icons/ai'


const Header = () => {
  const [open, setOpen] = useState(false)
  const toggle= () =>{
    return setOpen(!open)
  }
  return (
    <nav className="py-5 px-5 lg:px-16 2xl:px-80 flex justify-between items-center">
      <div className="logo cursor-pointer">
        <img src="/img/profile.png" alt="Logo" className="w-10 h-10" />
      </div>
      <div className={open ? `links lg:hidden` : `hidden lg:block`}>
        <ul
          className={
            open
              ? `absolute top-16 left-1/2 -translate-x-1/2 flex justify-center items-center py-16 gap-10 flex-col bg-white w-[90%] rounded-sm shadow-xl`
              : `relative flex gap-10`
          }>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Services</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Projects</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">About</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Testimony</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Services</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Blog</Link>
          </li>
          <li className="hover:text-purple-500 transition-all duration-300">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
      <div
        className="ham cursor-pointer flex justify-center items-center gap-2 text-2xl lg:hidden"
        onClick={toggle}>
        <AiOutlineBars />
        <span className="text-lg">MENU</span>
      </div>
    </nav>
  );
};

export default Header