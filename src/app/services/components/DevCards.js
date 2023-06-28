"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUser,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevCards() {
  return (
    <section className="devCards--container flex gap-4 bg-slate-200/5 rounded-lg p-5">
      <div className="devCards--imageContainer">
        <div className="devCards--imagePlaceholder h-20 w-20 bg-brand-accent rounded-full" />
      </div>
      <div className="devCards--infoContainer flex-col w-fit items-center">
        {/* Info */}
        <div>
          <h2 className="devCards--name text-xl text-brand-textHeader">
            Dave Developer
          </h2>
          <h4 className="devCards--title text-sm">Full-stack Developer</h4>
        </div>
        {/* Rates */}
        <div className="devCards--rates my-2">
          <h3 className="text-brand-textHeader">$300 - $1000</h3>
          <p className="text-sm">Rates</p>
        </div>
        {/* Bio */}
        <p className="devCards--bio text-sm">
          <span className="text-brand-secondary font-bold">BIO</span>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        {/* Social Links */}
        <div className="devCards--socialsContainer flex items-center gap-2">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="bg-brand-secondary/5 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="bg-brand-secondary/5 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
        </div>
        <p></p>
      </div>
    </section>
  );
}
