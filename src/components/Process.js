"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";
import GirlWithDesktopGraphic from "../components/GirlDesktopGraphic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

{/* Process for Customer to do business with OIO Dev */}

export default function Process() {
    return (
        <main className="process--container items-center justify-center sm:flex sm:flex-col md:flex md:flex-row px-10 py-9 mx-auto">
            <section className="bg-brand-primary/60 rounded-lg mb-6 mx-auto md:max-w-3xl xl:max-w-6xl">
                <div className="bg-gray-200/5 rounded-lg flex flex-col">
                    <h2 className="text-center text-2xl md:text-2xl">Process</h2>
                    <div>
                        <GirlWithDesktopGraphic/>
                    </div>
                </div>
            </section>
        </main>
    ) 

}
