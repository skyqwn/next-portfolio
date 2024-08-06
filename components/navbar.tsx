"use client";

import { Github, Home, Instagram } from "lucide-react";

import Link from "next/link";
import { useState } from "react";
import NavLink from "./nav-link";

const links = [
  {
    url: "/",
    title: "홈",
  },
  {
    url: "/about",
    title: "About",
  },
  {
    url: "/portfolio",
    title: "포트폴리오",
  },
  {
    url: "/contact",
    title: "문의하기",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <ul className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
      <li className="md:hidden lg:flex w-1/3 justify-start">
        <Link
          href={"/"}
          className="text-sm bg-primary rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">Frontend</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">
            .Dev
          </span>
        </Link>
      </li>

      <div className="hidden md:flex gap-4 w-1/3 justify-between">
        <NavLink links={links} />
      </div>

      <li className="hidden md:flex gap-5 w-1/3 justify-end">
        <Link href={"https://github.com/skyqwn"}>
          <Github />
        </Link>
        <Link href={"https://github.com/skyqwn"}>
          <Instagram />
        </Link>
      </li>
      <li className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col gap-2 z-50 relative"
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {open && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map((link) => (
              <Link href={link.url} key={link.title}>
                {link.title}
              </Link>
            ))}
          </div>
        )}
      </li>
    </ul>
  );
};

export default Navbar;
