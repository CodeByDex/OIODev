"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import LoginButton from "./login/LoginButton.js";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrollBackground, setScrollBackground] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  // Function for toggling nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Function for closing mobile menu
  const closeMenu = () => {
    setNav(false);
  };

  // function to scroll to top
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // useEffect for all contained functions
  useEffect(() => {
    // Function for closing mobile dropdown when window is resized
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    // Function for closing mobile dropdown menu when other elements are clicked
    const handleClickOutside = (event) => {
      if (
        !menuRef.current ||
        !navbarRef.current ||
        menuRef.current.contains(event.target) ||
        navbarRef.current.contains(event.target)
      ) {
        return;
      }
      setNav(false);
    };

    // Function for updating scroll background
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollBackground(true);
        setNav(false);
      } else {
        setScrollBackground(false);
      }
    };

    // Event listeners for menu functions
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const redirectToPath = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };

  const urlCheck = (url) => {
    console.log(url);
    console.log(window.location.pathname);
    if (typeof window !== "undefined" && window.location.pathname === url) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {/* Spacer div */}
      <div id="home" className=" pb-20" />

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`navbar--container flex flex-row justify-between px-10 py-5 mx-auto items-center fixed top-0 w-full z-50 transition-colors duration-700 ${
          scrollBackground ? " bg-brand-tertiary" : "bg-brand-primary"
        }`}
      >
        <div className="z-40 p-4">
          <Link
            href="/"
            className="text-brand-textHeader font-primary"
            onClick={closeMenu}
          >
            OIO Dev
          </Link>
        </div>

        {/* Default view */}
        <div
          onClick={handleNav}
          className={nav ? "hidden" : "flex sm:hidden p-4 z-50"}
        >
          <FontAwesomeIcon className="w-5" icon={faBars} />
        </div>
        <div
          onClick={handleNav}
          className={nav ? "flex sm:hidden p-4 z-50" : "hidden"}
        >
          <FontAwesomeIcon className="w-5" icon={faXmark} />
        </div>
        <div className="navbar--routeLinks hidden gap-4 items-center sm:flex">
          <div
            className="hover:text-brand-textHover cursor-pointer"
            onClick={() => {
              closeMenu;
              urlCheck("/") ? scrollToTop() : redirectToPath("/");
            }}
          >
            Home
          </div>
          <div
            className="hover:text-brand-textHover cursor-pointer"
            onClick={() => {
              closeMenu;
              urlCheck("/services")
                ? scrollToTop()
                : redirectToPath("/services");
            }}
          >
            Services
          </div>
          <div
            className="hover:text-brand-textHover cursor-pointer"
            onClick={() => {
              closeMenu;
              urlCheck("/dashboard")
                ? scrollToTop()
                : redirectToPath("/dashboard");
            }}
          >
            dashboard
          </div>
          <LoginButton />
          <Link className="w-5" href="/login">
            <FontAwesomeIcon icon={faUser} />
          </Link>
        </div>

        {/* Mobile view */}
        <div
          ref={menuRef}
          className={
            nav
              ? "fixed top-24 right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-300"
              : "fixed top-[-100%] right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-500 ease-in"
          }
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <Link
              onClick={handleNav}
              href="/"
              className="hover:text-brand-textHover"
            >
              Home
            </Link>
            <Link
              onClick={handleNav}
              href="/services"
              className="hover:text-brand-textHover"
            >
              Services
            </Link>
            <Link
              onClick={handleNav}
              href="/dashboard"
              className="hover:text-brand-textHover"
            >
              Dashboard
            </Link>
            <LoginButton />
            <Link onClick={handleNav} className="w-5" href="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
