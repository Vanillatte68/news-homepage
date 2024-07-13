"use client";

import Link from "next/link";
import IconMenu from "../images/icon-menu.svg";
import IconClose from "../images/icon-menu-close.svg";
import Logo from "../images/logo.svg";
import { useState } from "react";

export default function Navhead() {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav className="relative flex justify-between items-center px-8 py-9 md:py-10 md:px-28">
      <Link href="/">
        <Logo />
      </Link>
      <div
        className={`flex gap-10 md:flex-row flex-col md:h-auto fixed h-screen md:relative top-0 right-0 bg-off-white w-full md:w-auto md:bg-transparent md:translate-x-0 transition-transform duration-300 md:max-w-full md:p-0 max-w-sm p-9 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button className="md:hidden self-end" onClick={handleClick}>
          <IconClose />
        </button>
        <Link className="hover:text-red-primary" href="/">
          Home
        </Link>
        <Link className="hover:text-red-primary" href="#">
          New
        </Link>
        <Link className="hover:text-red-primary" href="#">
          Popular
        </Link>
        <Link className="hover:text-red-primary" href="#">
          Trending
        </Link>
        <Link className="hover:text-red-primary" href="#">
          Categories
        </Link>
      </div>
      <button className="md:hidden" onClick={handleClick}>
        <IconMenu />
      </button>
    </nav>
  );
}
