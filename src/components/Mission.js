"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";
import MissionGraphic from "../components/MissionGraphic"



export default function Mission() {

    return (

        <main className="hero--mission--container items-center justify-center sm:flex sm:flex-col md:flex md:flex-row px-10 py-9 mx-auto">
            <div className="image--container  sm:w-full max-w-lg mr-3 my-3">
                <MissionGraphic/>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 md:gap-8 mx-auto">
                <span className="mission--message text-center text-4xl md:text-5xl">
                Web Apps Tailored to Perfection
                </span>
                <Link href="/services" className=" text-brand-accent" alt="OIO Dev Logo">
                    Get Started Today!
                 </Link>
                <span className="slogan--message text-center text-2xl font-third md:text-2xl ">
                High-Quality ~ User-Friendly ~ Mobile Responsive 
                </span>
            </div>
        </main>

    )
}