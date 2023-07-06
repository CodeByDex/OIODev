"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function NotFound({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="flex my-16">
      <section className="devCards--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto md:max-w-3xl xl:max-w-6xl">
        <div className="flex-col px-5 py-8 items-center mx-auto max-w-6xl bg-gray-200/5 rounded-lg md:px-48 md:py-16">
          <div className="flex items-center justify-center mb-3">
            <h2 className="text-9xl text-brand-textHeader -mr-12">4</h2>
            <Image
              src="/static/space.svg"
              alt="Space Illustration"
              width={288}
              height={192}
              className="w-56 md:w-72"
            />
            <h2 className="text-9xl text-brand-textHeader -ml-12">4</h2>
          </div>
          <h2 className="text-center text-2xl font-semibold text-brand-textHeader md:text-3xl">
            Oops! Page Not Found.
          </h2>
          <h4 className="text-center text-base mb-5">
            It looks like we lost what you&apos;re looking for in cyber space.
          </h4>
          <Link href="/" className="flex justify-center font-primary font-bold">
            <div className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary py-3 px-6 rounded-lg w-fit">
              BACK TO HOME
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
