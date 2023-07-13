"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSliders,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function UserDisplayData() {
  const { data: session } = useSession();
  const [subNav, setSubNav] = useState(false);

  const OpenSubNav = () => {
    setSubNav(true);
  };

  const toggleSubNav = () => {
    setSubNav(!subNav);
  };

  const CloseSubNav = () => {
    setSubNav(false);
  };

  const urlCheck = (url) => {
    if (typeof window !== "undefined" && window.location.pathname === url) {
      return true;
    }
    return false;
  };

  const redirectToPath = (path) => {
    if (typeof window !== "undefined") {
      window.location.href = path;
    }
  };

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  if (session) {
    return (
      <>
        <img
          className="rounded-full hover:cursor-pointer"
          alt="Your Profile Picture"
          onMouseEnter={OpenSubNav}
          onClick={OpenSubNav}
          src={session.user.image}
          width={30}
          height={30}
        />

        {/* submenu */}
        <div
          onClick={toggleSubNav}
          onMouseEnter={OpenSubNav}
          onMouseLeave={CloseSubNav}
          className={
            subNav
              ? "fixed top-16 right-8 px-6 bg-brand-navBg border border-gray-800 rounded-lg items-center text-right p-5 duration-500"
              : "hidden"
          }
        >
          <p className="py-3 mb-3 pt-0 flex gap-4 font-primary text-lg cursor-default text-brand-textHeader border-b border-gray-800">
            <img
              className="rounded-full"
              alt="Your Profile Picture"
              src={session.user.image}
              width={25}
              height={25}
            />
            {session.user.name}
          </p>
          <div
            className="hover:text-brand-textHover cursor-pointer pb-3"
            onClick={() => {
              urlCheck("/dashboard")
                ? scrollToTop()
                : redirectToPath("/dashboard");
            }}
          >
            Dashboard
            <FontAwesomeIcon icon={faSliders} className="pl-3" />
          </div>
          <button
            className="hover:text-brand-textHover"
            onClick={() => signOut()}
          >
            Log out
            <FontAwesomeIcon icon={faRightFromBracket} className="pl-3" />
          </button>
        </div>
      </>
    );
  }
  return (
    <div>
      <button className=" hover:text-brand-textHover" onClick={() => signIn()}>
        Sign in
      </button>
    </div>
  );
}
