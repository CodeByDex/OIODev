"use client";
import { useEffect } from "react";
import Image from "next/image";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <div className="">
        <h2>4</h2>
        <Image
          src="/static/space.svg"
          alt="Space Illustration"
          width={300}
          height={300}
          className=""
        />
        <h2>4</h2>
      </div>

      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
