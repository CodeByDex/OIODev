"use client";
import "tailwindcss/tailwind.css";

export default function BackgroundOrbs() {
  return (
    <div className="backgroundOrbs--container flex flex-col items-center justify-center">
      <div className="bg-brand-accent/20  h-64 w-64 md:h-96 md:w-96px rounded-full absolute top-32 left-28 blur-[125px] md:blur-[125px] overflow-hidden" />
      <div className="bg-brand-secondary/20 h-64 w-64 md:h-96 md:w-96 rounded-full absolute top-64 left-96 blur-[125px] md:blur-[125px] overflow-hidden" />
    </div>
  );
}
