"use client";
import Link from "next/link";
import Login from "../components/login/index.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="navbar--container flex flex-row justify-between px-10 py-9 mx-auto bg-brand-primary items-center ">
      <div className="z-50">
        <Link href="/" className="text-brand-textHeader font-primary">OIO Dev</Link>
      </div>

      {/* Default view */}
      <div onClick={handleNav} className="flex sm:hidden z-50">
        <FontAwesomeIcon className="w-5" icon={faBars} />
      </div>
      <div className="navbar--routeLinks hidden gap-4 items-center sm:flex">
        <Link href="/" className="hover:text-brand-textHover">
          Home
        </Link>
        <Link href="/services" className="hover:text-brand-textHover">
          Services
        </Link>
        <Link href="/dashboard" className="hover:text-brand-textHover">
          Dashboard
        </Link>
        <Link className="w-5 gap-4" href="/login">
          <FontAwesomeIcon icon={faRightToBracket} />
        </Link>
        <Link className="w-5" href="/login">
          <FontAwesomeIcon icon={faUser} />
        </Link>
      </div>

      {/* Mobile view */}
      <div
        className={
          nav
            ? "fixed z-30 top-0 pt-20 right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-700 ease-in"
            : "fixed z-30 top-[-100%] right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-700 ease-in"
        }
      >
        <div className="flex flex-col items-center justify-center gap-5">
          <Link href="/" className="hover:text-brand-textHover">
            Home
          </Link>
          <Link href="/services" className="hover:text-brand-textHover">
            Services
          </Link>
          <Link href="/dashboard" className="hover:text-brand-textHover">
            Dashboard
          </Link>
          <Link className="w-5 gap-4" href="/login">
            <FontAwesomeIcon icon={faRightToBracket} />
          </Link>
          <Link className="w-5" href="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>
      </div>
    </nav>
  );
}