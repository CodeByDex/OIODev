"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import MissionGraphic from "../components/MissionGraphic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Mission() {
  return (
    <section className="hero--missionContainer flex items-center justify-start h-screen -mt-24 mx-auto max-w-6xl gap-4 sm:flex-col md:flex md:flex-row ">
      <div className="flex flex-col items-start justify-start overflow-clip">
        <div className="image--container max-w-lg -mb-6 -mr-32">
          <MissionGraphic />
        </div>
        <div className="flex flex-col gap-5 w-full">
          <h1 className="mission--message text-left text-brand-textHeader font-primary font-semibold text-5xl md:text-5xl drop-shadow-xl">
            Web Apps Tailored for You & Your Brand
          </h1>
          <Link
            href="/services"
            className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent font-semibold font-primary text-xl py-2 px-4 flex gap-3 items-center rounded-lg w-fit"
            alt="OIO Dev Logo"
          >
            Find a Developer
            <FontAwesomeIcon icon={faAngleRight} className="" />
          </Link>
        </div>
        <h2 className="slogan--message text-base font-secondary md:text-2xl mt-4">
          Unleash your digital potential with OIO Dev. Our developers transform
          your ideas into remarkable websites and server applications.
        </h2>
      </div>
    </section>
  );
}
