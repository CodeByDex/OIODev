"use client"
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";
// import heroImage from "../../public/WebDevHero.jpg"
import heroImage from "../../public/static/ComputerDesktop.svg"
// import heroImage from "../../public/GirlOnBooks.svg"



export default function Mission() {

    return (

        <main className="hero--mission--container items-center justify-center sm:flex sm:flex-col md:flex md:flex-row px-10 py-9 mx-auto">
            <div className="image--container  sm:w-full max-w-lg mr-3 my-3">
                <Image 
                    className="hero--image"
                    src={heroImage}
                    style={{ width: '100%', height: 'auto' }}
                    alt="Mission Hero Image"
                />
            </div>
            <div className="flex flex-col items-center justify-center gap-3 md:gap-14 mx-auto">
                <span className="mission--message text-center text-4xl md:text-5xl">
                Web Apps Tailored to Perfection
                </span>
                <span className="slogan--message text-center text-2xl font-third md:text-2xl ">
                High-Quality ~ User-Friendly ~ Mobile Responsive 
                </span>
            </div>
        </main>

    )
}