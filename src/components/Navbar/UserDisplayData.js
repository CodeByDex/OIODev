import { set } from "mongoose";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function UserDisplayData() {
  const { data: session } = useSession();
  const Console = () => {
    console.log(session);
  };
  const [subNav, setSubNav] = useState(false);

  const OpenSubNav = () => {
    setSubNav(true)
  }

  const CloseSubNav = () => {
    setSubNav(false);
  };

  const toggleSubNav = () => {
    setSubNav(!subNav);
  };

  if (session) {
    return (
      <>
        <Image
          className=" rounded-full hover: bg-white mb"
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
              ? "fixed top-24 right-16 bg-brand-tertiary rounded-bl-2xl items-center p-5 duration-500"
              : "fixed right-[-10%] top-24 p-5 duration-500 ease-in"
          }
        >
          <p>{session.user.name}</p>
          <p>dashboard</p>          
          <button onClick={() => signOut()}>Sign out</button>
          
        </div>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
