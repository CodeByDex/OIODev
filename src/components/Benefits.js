"use client";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import BenefitsSlider from "../components/BenefitsSlider";

export default function Benefits() {
  return (
    <section className="benefits--container flex flex-col items-center justify-start gap-3 max-w-6xl my-12">
      <h2 className="font-primary font-semibold text-brand-textHeader text-left text-3xl md:text-4xl lg:text-5xl px-4 mr-auto">
        Unlock the Benefits
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          className="h-6 ml-4 text-brand-accent animate-bounce"
        />
      </h2>
      <p className="mr-auto px-4">A modern and up-to-date website offers numerous advantages!</p>
      <div className="block relative w-full sm:hidden">
        <BenefitsSlider />
      </div>
    </section>
  );
}
