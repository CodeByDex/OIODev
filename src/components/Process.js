"use client"
import Link from "next/link";
import "tailwindcss/tailwind.css";
import GirlWithDesktopGraphic from "../components/GirlDesktopGraphic"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {fa1} from "@fortawesome/free-solid-svg-icons"
import {fa2} from "@fortawesome/free-solid-svg-icons"
import {fa3} from "@fortawesome/free-solid-svg-icons"



{/* Process for Customer to do business with OIO Dev */}

export default function Process() {
    return (           
        <section className="process--container text-2xl items-center justify-center text-center min-w-2xl max-w-6xl sm:text-base sm:flex sm:flex-col md:flex md:flex-row md:text-xl px-10 py-9 mx-auto">
            <section className="bg-brand-primary/60 rounded-lg mb-6 mx-auto md:max-w-3xl xl:max-w-6xl">
                <div className="bg-gray-200/5 rounded-lg ">
                    <h2 className="text-center text-2xl my-3 md:text-2xl">Our Process</h2>
                    <ul className="sm:flex sm:flex-col md:flex md:flex-row">
                        <li className="mx-4">
                            <FontAwesomeIcon icon={fa1} className="mr-4 text-brand-accent"/>
                            View Service Options
                        </li>
                        <li className="mx-4">
                            <FontAwesomeIcon icon={fa2} className="mr-4 text-brand-accent"/>
                            Consult with Developer of Your Choice
                        </li>
                        <li className="mx-4">
                            <FontAwesomeIcon icon={fa3} className="mr-4 text-brand-accent"/>
                            Purchase 
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    ) 

}
