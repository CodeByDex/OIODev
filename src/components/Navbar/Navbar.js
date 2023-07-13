"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import UserDisplayData from "./UserDisplayData.js";
import MobileSessionData from "./MobileSessionData.js";
import LoggingButton from "./LoggingButton.js"


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

    if (typeof window !== "undefined" && window.location.pathname === url) {
      return true;
    }
    return false;
  };

  return (
    <div>
      {/* Spacer div */}
      <div id="home" className="pb-24" />

      {/* Navbar */}
      <nav
        ref={navbarRef}
        className={`navbar--container flex flex-row justify-between px-2 py-2 mx-auto items-center fixed top-0 w-full z-50 transition-colors duration-200 xl:px-10 ${
          scrollBackground ? " bg-brand-navBg/95 border-b border-gray-800 backdrop-blur-md" : "bg-transparent border-b border-gray-800/0"
        }`}
      >
        <div className="z-40 p-4">
          <div
            className="text-brand-textHover cursor-pointer font-primary font-semibold text-xl md:text-2xl"
            onClick={() => {
              closeMenu;
              urlCheck("/") ? scrollToTop() : redirectToPath("/");
            }}
          >
            OI<span className="text-brand-secondary">/</span>O Dev
          </div>
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
        <div className="navbar--routeLinks hidden gap-4 items-center px-4 sm:flex">
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
              urlCheck("/developers")
                ? scrollToTop()
                : redirectToPath("/developers");
            }}
          >
            Browse Developers
          </div>
          <UserDisplayData />
        </div>

        {/* Mobile view */}
        <div
          ref={menuRef}
          className={
            nav
              ? "fixed w-4/6 top-4 right-3 px-6 bg-brand-navBg border border-gray-800 rounded-lg items-center text-right p-5 duration-500 sm:hidden z-40"
              : "hidden"
          }
        >
          <div className="flex flex-col text-right text-lg gap-5">
            <MobileSessionData onClick={closeMenu}/>
            <div
              className="hover:text-brand-textHover cursor-pointer"
              onClick={() => {
                closeMenu();
                urlCheck("/") ? scrollToTop() : redirectToPath("/");
              }}
            >
              Home
            </div>
            <div
              className="hover:text-brand-textHover cursor-pointer"
              onClick={() => {
                closeMenu();
                urlCheck("/developers")
                  ? scrollToTop()
                  : redirectToPath("/developers");
              }}
            >
              Browse Developers
            </div>
            <div
              className="hover:text-brand-textHover cursor-pointer"
              onClick={() => {
                closeMenu();
                urlCheck("/dashboard")
                  ? scrollToTop()
                  : redirectToPath("/dashboard");
              }}
            >
              Dashboard
            </div>
            <LoggingButton />
            {/* <Link onClick={handleNav} className="w-5" href="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
