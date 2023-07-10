"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevCardLoading() {
  return (
    <section className="devCards--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto max-w-6xl">
      <div className="bg-gray-200/5 rounded-lg w-full">
        <div className="devCards--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:gap-4">
          {/* Info */}
          <div className="flex mr-auto gap-4 md:w-2/5">
            <div className="devCards--imageContainer flex items-center">
              <div className="devCards--imagePlaceholder h-24 w-24 bg-neutral-800 rounded-full animate-pulse" />
            </div>
            <div>
              {/* Availability Loader */}
              <div className="bg-neutral-800 w-1/2 h-4 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
              {/* Name Loader */}
              <div className="bg-neutral-800 w-full h-8 sm:h-9 md:h-10 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
              {/* Title Loader */}
              <h4 className="devCards--title text-sm">{props.title}</h4>
              {/* Rates Loader */}
              <div className="devCards--rates my-2">
                <h3 className="text-brand-textHeader leading-4">
                  ${props.rate}
                </h3>
                <p className="text-sm">Hourly Rate</p>
              </div>
            </div>
          </div>
          {/* Bio Loader */}
          <div className="devCards--bioContainer w-full md:w-3/5 md:mt-2">
            <div className="text-sm my-2 sm:text-base">
              <div className="text-brand-secondary font-bold flex justify-between mb-1">
                <p className="font-primary">BIO</p>
                <Link
                  href=""
                  target="_blank"
                  className="underline text-brand-accent"
                >
                  View My Portfolio
                </Link>
              </div>
              <p>{props.bio}</p>
            </div>
            {/* Social Links */}
            <div className="devCards--socialsContainer flex justify-end items-center gap-2">
              <Link href="https://linkedin.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
              </Link>
              <Link href="https://github.com/" target="_blank">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
