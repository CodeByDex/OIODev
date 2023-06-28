"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";


export default function Footer() {

    return (
        <footer className="footer--container flex flex-row">
            <ul>
                <Link href="/" className=" font-primary">
                    OIO Dev
                </Link>
                <a href="https://github.com/CodeByDex/OIODev" className="GitHub--Link hover:textHover font-secondary">
                    GitHub
                </a>
            </ul>


        </footer>
    )
}