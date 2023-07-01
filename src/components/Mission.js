"use client"
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import heroImage from "../../public/WebDevHero.jpg"


export default function Mission() {

    return (

        <main className="hero--mission--container sm:flex sm:flex-col md:flex md:flex-row px-10 py-9 ">
            <div className="image--container sm:w-full md:w-1/3 mr-3 my-3">
                <Image 
                    className="hero--image"
                    src={heroImage}
                    // style={{ width: '100%', height: 'auto' }}
                    width={1200}
                    height={800}
                    alt="Mission Hero Image"
                />
            </div>
            <div className="mission--message flex flex-col items-center gap-3 ">
                <span className="mission--message text-center sm:text-4xl md:text-8xl">
                Web Apps Tailored to Perfection
                </span>
                <span className="slogan--message font-third ">
                High-Quality ~ User-Friendly ~ Mobile Responsive 
                </span>
            </div>
           
        </main>

    )
}