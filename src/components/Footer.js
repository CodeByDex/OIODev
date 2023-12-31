"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";

export default function Footer() {
  return (
    <footer className="footer--container px-10 py-9">
      {/* Footer Links */}
      <div className="footer--first-row flex sm:flex-row lg:flex-row justify-between ">
        <Link href="/" className=" text-brand-accent hover:text-brand-textHover" alt="OIO Dev Logo">
          OIO Dev
        </Link>
        <a
          href="https://github.com/CodeByDex/OIODev"
          className="GitHub--Link hover:text-brand-textHover text-brand-secondary"
        >
          GitHub
        </a>
      </div>

      {/* Legal Disclaimer */}
      <div>
        <span className="footer--second-row hidden md:flex md:flex-row md:justify-center md:gap-1 ">
          © 2023
          <Link
            href="/"
            passHref
            className="legal--disclaimer hover:underline hover:text-brand-textHover text-brand-accent"
            alt="OIO Dev Logo"
          >
            OIO Dev
          </Link>
          All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
