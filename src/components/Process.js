"use client";
import "tailwindcss/tailwind.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Process() {
  return (
    <section className="about--container flex flex-col items-center justify-start gap-3 max-w-6xl px-4 w-full md:w-4/5 lg:w-full">
      <h2 className="font-primary font-semibold text-brand-textHeader text-left text-3xl md:text-4xl lg:text-5xl mr-auto">
        Our Process
      </h2>
      <div className="flex">
        <div className="flex flex-col gap-7 lg:gap-5 lg:w-2/5 lg:my-auto">
          <p>
            At OIO Dev, we are committed to turning your digital aspirations
            into reality. Our streamlined process ensures a seamless experience
            from start to finish.
          </p>
          <div className="flex flex-col gap-5 lg:hidden">
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #1
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Browse Our Developers:
                </p>
                <p className="text-sm md:text-base">
                  Explore our curated list of skilled freelance developers who
                  specialize in a wide range of services tailored to meet your
                  unique needs.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #2
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Book Your Free Consult:
                </p>
                <p className="text-sm md:text-base">
                  We&apos;ll listen to your ideas, understand your goals, and
                  help you choose the perfect solutions for your project.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #3
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Initiate Your Project:
                </p>
                <p className="text-sm md:text-base">
                  Once you&apos;ve selected the ideal developer and finalized
                  your service options, we will kickstart the development of
                  your project.
                </p>
              </div>
            </div>
          </div>
          <p>
            With OIO Dev, you can trust us to deliver exceptional results and
            transform your digital landscape. Experience the difference of
            working with a dedicated individuals that are committed to your
            success. Let us bring your digital vision to life!
          </p>
          <Link
            href="/developers"
            className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent font-primary text-xl py-2 px-4 flex gap-3 items-center rounded-lg w-fit"
            alt="Find a Developer"
          >
            Start Your Process
            <FontAwesomeIcon icon={faAngleRight} className="" />
          </Link>
        </div>
        <div className="lg:w-3/5">
          <div className="hidden lg:flex lg:flex-col gap-4">
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #1
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Browse Our Developers:
                </p>
                <p className="text-sm md:text-base">
                  Explore our curated list of skilled freelance developers who
                  specialize in a wide range of services tailored to meet your
                  unique needs.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #2
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Book Your Free Consult:
                </p>
                <p className="text-sm md:text-base">
                  We&apos;ll listen to your ideas, understand your goals, and
                  help you choose the perfect solutions for your project.
                </p>
              </div>
            </div>
            <div className="flex gap-3 md:ml-8">
              <p className="text-3xl md:text-4xl font-primary text-brand-secondary my-auto">
                #3
              </p>
              <div className="">
                <p className="text-xl font-primary text-brand-textHeader">
                  Initiate Your Project:
                </p>
                <p className="text-sm md:text-base">
                  Once you&apos;ve selected the ideal developer and finalized
                  your service options, we will kickstart the development of
                  your project.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
