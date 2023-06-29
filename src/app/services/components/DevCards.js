"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevCards() {
  return (
    <section className="devCards--container flex gap-4 bg-gray-200/5 rounded-lg p-5">
      <div className="devCards--infoContainer flex-col items-center">
        {/* Info */}
        <div className="flex gap-4">
          <div className="devCards--imageContainer flex items-center">
            <div className="devCards--imagePlaceholder h-24 w-24 bg-brand-accent rounded-full" />
          </div>
          <div>
            <p className="flex items-center text-xs text-brand-accent">
              Available for Work
              <div className="relative inline-block">
                <FontAwesomeIcon
                  icon={faCircle}
                  className="p-2 w-2 h-2 absolute top-0 left-0 blur-sm"
                  style={{ zIndex: -1 }}
                />
                <FontAwesomeIcon icon={faCircle} className="p-2 w-2 h-2" />
              </div>
            </p>
            <h2 className="devCards--name text-2xl leading-6 text-brand-textHeader">
              Dave Developer
            </h2>
            <h4 className="devCards--title text-sm">Full-stack Developer</h4>
            <div className="devCards--rates my-2">
              <h3 className="text-brand-textHeader leading-4">$300 - $1000</h3>
              <p className="text-sm">Rates</p>
            </div>
          </div>
        </div>
        {/* Bio */}
        <div className="devCards--bio text-sm my-2">
          <div className="text-brand-secondary font-bold flex justify-between mb-1">
            <p>BIO</p>
            <p className="underline">View My Portfolio</p>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
        {/* Social Links */}
        <div className="devCards--socialsContainer flex justify-end items-center gap-2">
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className="bg-brand-secondary/5 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
          <FontAwesomeIcon
            icon={faGithub}
            className="bg-brand-secondary/5 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
        </div>
        {/* Portfolio Link */}
        <div></div>
      </div>
    </section>
  );
}
