"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarCheck,
  faRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function UserDash() {
  return (
    <section className="userDash--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto">
      <div className="bg-gray-200/5 rounded-lg w-full">
        <div className="userDash--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:py-12 md:gap-4">
          <div className="flex mr-auto gap-4">
            <div className="userDash--imageContainer flex items-center">
              <div className="userDash--imagePlaceholder h-24 w-24 bg-brand-accent rounded-full" />
            </div>
            <div>
              <h4 className="userDash--title text-base">Welcome back,</h4>
              <h2 className="userDash--name font-semibold text-2xl leading-6 text-brand-textHeader sm:text-3xl md:text-4xl">
                Zach Mutch
              </h2>
              <h4 className="userDash--email text-sm">zkmutch@gmail.com</h4>
            </div>
          </div>
        </div>
        <div className="userDash--linksContainer pb-10 flex flex-col md:px-8 md:gap-2 text-lg font-primary">
          <Link href="/dashboard" className="flex items-center justify-between">
            <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
              <FontAwesomeIcon
                icon={faUser}
                className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
              />
              Profile
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4" />
          </Link>
          <Link href="/dashboard" className="flex items-center justify-between">
            <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
              <FontAwesomeIcon
                icon={faCalendarCheck}
                className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
              />
              Upcoming Appointments
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 hidden" />
          </Link>
          <Link href="/dashboard" className="flex items-center justify-between">
            <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent p-2 rounded-lg w-5 h-5"
              />
              Log Out
            </div>
            <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 hidden" />
          </Link>
        </div>
      </div>
    </section>
  );
}
