"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";


export default function DevCards(props) {
  return (
    <section className="devCards--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto max-w-6xl">
      <div className="bg-gray-200/5 rounded-lg">
        <div className="devCards--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:gap-4">
          {/* Info */}
          <div className="flex mr-auto gap-4 md:w-2/5">
            <div className="devCards--imageContainer flex items-center">
              <div className="devCards--imagePlaceholder h-24 w-24 bg-brand-accent rounded-full" />
            </div>
            <div>
              <div
                className={
                  props.available
                    ? "flex items-center text-xs text-brand-accent"
                    : "flex items-center text-xs text-brand-accent/30"
                }
              >
                Available for Work
                <div className="relative inline-block">
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={
                      props.available
                        ? "p-2 w-2 h-2 absolute top-0 left-0 blur-sm z-0"
                        : "hidden"
                    }
                  />
                  <FontAwesomeIcon
                    icon={faCircle}
                    className={
                      props.available ? "p-2 w-2 h-2 z-10" : "p-2 w-2 h-2 z-10"
                    }
                  />
                </div>
              </div>
              <h2 className="devCards--name font-semibold text-2xl leading-6 text-brand-textHeader sm:text-3xl md:text-4xl">
                {props.firstName} {props.lastName}
              </h2>
              <h4 className="devCards--title text-sm">{props.title}</h4>
              <div className="devCards--rates my-2">
                <h3 className="text-brand-textHeader leading-4">
                  ${props.rateLow} - ${props.rateHigh}
                </h3>
                <p className="text-sm">Rates</p>
              </div>
            </div>
          </div>
          {/* Bio */}
          <div className="devCards--bioContainer md:w-3/5 md:mt-2">
            <div className="text-sm my-2 sm:text-base">
              <div className="text-brand-secondary font-bold flex justify-between mb-1">
                <p className="font-primary">BIO</p>
                <Link
                  href={props.portfolioUrl}
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
              <Link href={props.linkedinUrl} target="_blank">
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
              </Link>
              <Link href={props.githubUrl} target="_blank">
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
