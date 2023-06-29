"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";


export default function Footer() {

    return (
        <footer className="footer--container px-10 py-9 ">
                <div className="footer--first-row flex flex-row justify-between ">
                <Link href="/" className=" text-brand-accent" alt="OIO Dev Logo">
                    OIO Dev
                </Link>
                <a href="https://github.com/CodeByDex/OIODev" className="GitHub--Link hover:text-brand-textHover text-brand-secondary">
                    GitHub
                </a>
                </div>

                <span className="footer--second-row flex flex-row justify-center gap-1 ">© 2023
                        <Link href="/" className="legal--disclaimer hover:underline hover:text-brand-accent " alt="OIO Dev Logo">
                        OIO Dev
                        </Link>
                       All Rights Reserved.
                </span>


        </footer>
    )
}