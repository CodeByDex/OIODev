"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";


export default function AboutUs() {

    return (
        <main className="about--container flex flex-col gap-4 sm:items-center sm:text-center px-10 py-9 ">

            <span className=" sm:text-base sm:text-center md:text-3xl mx-auto ">
            Welcome to OIODev, where we connect you with skilled Technology Professionals who specialize in 
            creating exceptional websites and server applications. We bring your digital vision to life!
            </span>

           <h2 className=" underline sm:text-base md:text-5xl">Unlocking the Benefits </h2> 
           <ul className="bullet--list list-disc sm:text-base sm:text-center md:text-3xl mx-auto">
                <span>
                A modern and up-to-date website offers numerous advantages, including:
                </span>
                <li className="mx-4">
                improved user experience
                </li>
                <li className="mx-4">
                enhanced brand credibility
                </li>
                <li className="mx-4">
                increased online visibility   
                </li>
                <li className="mx-4">
                higher user engagement
                </li>
           </ul>
        </main>
    )
}