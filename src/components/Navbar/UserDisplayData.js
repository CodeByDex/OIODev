"use client"
import { useSession, signIn, signOut } from "next-auth/react";
import { useState} from "react";

export default function UserDisplayData() {
  const { data: session } = useSession();
  const [subNav, setSubNav] = useState(false);

  const OpenSubNav = () => {
    setSubNav(true)
  }

  const toggleSubNav = () => {
    setSubNav(!subNav)
  }

  const CloseSubNav = () => {
    setSubNav(false);
  };

  const urlCheck = (url) => {
    console.log(url);
    console.log(window.location.pathname);
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
          className=" rounded-full border-4 border-brand-tertiary hover: bg-white mb"
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
              ? "fixed top-24 right-0 pr-32 bg-brand-quaternary rounded-bl-2xl items-center p-5 duration-500"
              : "fixed right-[-10%] top-24 p-5 duration-500 ease-in"
          }
        >
          <p className="py-3 pt-0 text-brand-accent">{session.user.name}</p>
          <div
            className="hover:text-brand-textHover cursor-pointer pb-3"
            onClick={() => {
              urlCheck("/dashboard")
                ? scrollToTop()
                : redirectToPath("/dashboard");
            }}
          >
            Dashboard
          </div>       
          <button className="hover:text-brand-textHover" onClick={() => signOut()}>Sign out</button>
          
        </div>
      </>
    );
  }
  return (
    <div>
      <button className=" hover:text-brand-textHover" onClick={() => signIn()}>Sign in</button>
    </div>
  );
}
