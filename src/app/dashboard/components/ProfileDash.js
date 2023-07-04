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
    <section className="userDash--container flex flex-grow items-center bg-brand-primary/60 rounded-lg mb-6 mx-auto">
      <div className="bg-gray-200/5 rounded-lg w-full h-full md:px-8 md:py-12">
        <form className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label>First Name</label>
            <input
              className="bg-transparent underline decoration-brand-accent font-primary text-brand-textHeader text-2xl"
              type="text"
              defaultValue="Zach"
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Last Name</label>
            <input
              className="bg-transparent underline decoration-brand-accent font-primary text-brand-textHeader text-2xl"
              type="text"
              defaultValue="Mutch"
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input
              className="bg-transparent underline decoration-brand-accent font-primary text-brand-textHeader text-2xl"
              type="text"
              defaultValue="zkmutch@gmail.com"
            ></input>
          </div>
          <div className="flex flex-col">
            <label>Company</label>
            <input
              className="bg-transparent underline decoration-brand-accent font-primary text-brand-textHeader text-2xl"
              type="text"
              defaultValue="OSU Bootcamp"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
}
