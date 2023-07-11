"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import MissionGraphic from "../components/MissionGraphic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Mission() {
  return (
    <section className="hero--mission--container flex items-center justify-start my-32 mx-auto max-w-6xl gap-4 sm:flex-col md:flex md:flex-row ">
      <div className="flex flex-col items-start justify-start gap-5 md:gap-8">
        <div className="flex flex-col gap-5 w-2/3">
          <h1 className="mission--message text-left text-brand-textHeader font-primary font-semibold text-4xl md:text-5xl drop-shadow-xl">
            OIO Dev<br></br>
            <span className="text-5xl">Web Apps Tailored to Perfection</span>
          </h1>
          <Link
            href="/services"
            className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent font-semibold font-primary text-xl py-2 px-4 flex gap-3 items-center rounded-lg w-fit"
            alt="OIO Dev Logo"
          >
            Get Started
            <FontAwesomeIcon icon={faAngleRight} className="" />
          </Link>
        </div>
        <h2 className="slogan--message text-center text-xl font-third font-semibold md:text-2xl">
          High-Quality ~ User-Friendly ~ Mobile Responsive
        </h2>
      </div>
      <div className="image--container absolute transform scale-x-[-1] -z-10 w-full left-44 max-w-lg mr-3 my-3">
        <MissionGraphic />
      </div>
    </section>
  );
}
