"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";

export default function DevCardLoading() {
  return (
    <section className="devCards--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto max-w-6xl">
      <div className="bg-gray-200/5 border-gray-800 border rounded-lg w-full">
        <div className="devCards--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:gap-4">
          {/* Info */}
          <div className="flex mr-auto gap-4 w-5/6 md:w-2/5">
            <div className="devCards--imageContainer flex items-center">
              <div className="devCards--imagePlaceholder h-24 w-24 bg-gray-800 rounded-full animate-pulse" />
            </div>
            <div className="w-full">
              {/* Name Loader */}
              <div className="bg-gray-800 w-3/4 h-8 sm:h-9 md:h-10 my-2 mr-4 px-2 rounded-lg animate-pulse" />
              {/* Title Loader */}
              <div className="bg-gray-800 w-4/6 h-5 my-2 mr-4 px-2 rounded-lg animate-pulse" />
              {/* Rates Loader */}
              <div className="devCards--rates my-2">
                <div className="bg-gray-800 w-2/6 h-5 my-2 mr-4 px-2 rounded-lg animate-pulse" />
                <div className="bg-gray-800 w-3/6 h-5 my-2 mr-4 px-2 rounded-lg animate-pulse" />
              </div>
            </div>
          </div>
          {/* Bio Loader */}
          <div className="devCards--bioContainer w-full md:w-3/5 md:mt-2">
            <div className="text-sm my-2 sm:text-base">
              <div className="flex justify-between mb-1">
                <div className="bg-gray-800 w-1/5 h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />

                <Link
                  href=""
                  target="_blank"
                  className="underline text-brand-accent font-bold"
                >
                  View My Portfolio
                </Link>
              </div>
              <div className="bg-gray-800 w-full h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />
              <div className="flex">
                <div className="bg-gray-800 w-1/2 h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />
                <div className="bg-gray-800 w-1/2 h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />
              </div>
              <div className="flex">
                <div className="bg-gray-800 w-1/4 h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />
                <div className="bg-gray-800 w-1/2 h-5 sm:h-6 my-1 mr-4 px-2 rounded-lg animate-pulse" />
              </div>
            </div>
            {/* Social Links */}
            <div className="devCards--socialsContainer flex justify-between items-center gap-2 h-fit mb-2">
              <Link
                href={""}
                target="_blank"
                className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary font-primary text-base pl-3 flex items-center rounded-lg w-fit"
                alt="CalendlyModal"
              >
                Book a Consult
                <FontAwesomeIcon
                  icon={faAngleRight}
                  className="delay-75 duration-300 text-brand-secondary items-center p-2 rounded-lg w-5 h-5"
                />
              </Link>
              {/* <CalendlyModal/> */}
              <div className="flex gap-2 items-center h-5">
                <Link href={""} target="_blank">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                  />
                </Link>
                <Link href={""} target="_blank">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
