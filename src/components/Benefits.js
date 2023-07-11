"use client";
import Link from "next/link";
import "tailwindcss/tailwind.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";
import BenefitsSlider from "../components/BenefitsSlider";

export default function Benefits() {
  return (
    <main className="benefits--container flex flex-col items-center justify-start gap-3 max-w-6xl">
      <h2 className="font-primary font-semibold text-brand-textHeader text-left text-3xl md:text-4xl mr-auto">
        Unlock the Benefits
        <FontAwesomeIcon
          icon={faArrowTurnDown}
          className="h-6 ml-4 text-brand-accent animate-bounce"
        />
      </h2>
      <p className="mr-auto">A modern and up-to-date website offers numerous advantages!</p>
      <div className="block relative">
        <BenefitsSlider />
      </div>
    </main>
    // <main>
    //     <section className="bg-brand-primary/60 rounded-lg mb-6 mx-auto md:max-w-3xl xl:max-w-6xl">
    //        <div className="bg-gray-200/5 rounded-lg">
    //             <h2 className="underline text-center text-2xl my-3 md:text-2xl">Unlocking the Benefits </h2>
    //             <ul className="bullet--list list-inside text-2xl sm:text-base mx-auto">
    //                     <span>
    //                     A modern and up-to-date website offers numerous advantages, including:
    //                     </span>
    //                     <li className="mx-4">
    //                     <FontAwesomeIcon icon={faUserCheck} className="mr-4"/>
    //                     Improved User Experience
    //                     </li>
    //                     <li className="mx-4">
    //                     <FontAwesomeIcon icon={faCommentsDollar} className="mr-4"/>
    //                     Enhanced Brand Credibility
    //                     </li>
    //                     <li className="mx-4">
    //                     <FontAwesomeIcon icon={faDesktop} className="mr-4"/>
    //                     Increased Online Visibility
    //                     </li>
    //                     <li className="mx-4">
    //                     <FontAwesomeIcon icon={faPeopleGroup} className="mr-4"/>
    //                     Higher User Engagement
    //                     </li>
    //             </ul>
    //         </div>
    //    </section>
    // </main>
  );
}
