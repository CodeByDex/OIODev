"use client"
import Link from "next/link";
import Image from "next/image";
import "tailwindcss/tailwind.css";
import heroImage from "../../public/WebDevHero.jpg"


export default function Mission() {

    return (

        <main className="hero--mission--container sm:flex sm:flex-col md:flex md:flex-row px-10 py-9">
        
            <Image 
                className="hero--image"
                src={heroImage}
                width={400}
                height={300}
                alt="Mission Hero Image"
            />
       
            <span>
            Delivering high-quality, user-friendly and mobile responsive web
            applications that embody the essence of your brand.
            </span>

        </main>

    )
}