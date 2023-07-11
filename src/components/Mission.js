"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import MissionGraphic from "../components/MissionGraphic";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Mission() {
  return (
    <section className="hero--missionContainer flex flex-col items-center justify-start h-screen sm:h-fit gap-4 md:my-16">
      <div className="flex flex-col items-start justify-start overflow-clip sm:flex-row">
        <div className="image--container max-w-2xl -mb-6 -mr-32 sm:hidden">
          <MissionGraphic />
        </div>
        <div className="flex flex-col gap-5 w-full sm:mt-auto md:w-1/2 px-8 sm:pr-0">
          <h1 className="mission--message text-left text-brand-textHeader font-primary font-semibold text-5xl md:text-6xl lg:text-8xl">
            Web Apps Tailored for You & Your <span className="text-brand-secondary font-secondary">{`<`}</span>Brand<span className="text-brand-secondary font-secondary">{`/>`}</span>
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
        <div className="image--container hidden sm:flex max-w-2xl -mb-6 -mr-40 -ml-16 -z-10 lg:-mr-32">
          <MissionGraphic />
        </div>
      </div>
      <h2 className="slogan--message text-left font-secondary px-8 pt-1 mr-auto sm:w-4/5 lg:w-3/5">
        Unleash your digital potential with OIO Dev. Our developers transform
        your ideas into remarkable websites and server applications.
      </h2>
    </section>
  );
}
