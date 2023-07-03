"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarCheck,
  faRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileDash() {
  return (
    <section className="userDash--container flex flex-grow bg-brand-primary/60 rounded-lg mb-6 mx-auto">
      <div className="bg-gray-200/5 rounded-lg w-full h-full">
        Profile Dashboard
      </div>
    </section>
  );
}
