"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";
import heroImage from "../../public/WebDevelopmentHero.jpg"


export default function Mission() {

    return (
        <main className="footer--container px-10 py-9 ">

        <Link href="/heroImage">

        </Link>
        <span>
        Delivering high-quality, user-friendly and mobile responsive web
        applications that embody the essence of your brand.
        </span>
        </main>
    )
}