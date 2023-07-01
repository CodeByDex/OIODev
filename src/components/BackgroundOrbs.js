"use client";
import "tailwindcss/tailwind.css";

export default function BackgroundOrbs() {
  return (
    <div className="backgroundOrbs--container">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-accent/10 rounded-full filter blur-3xl animate-blob mix-blend-multiply md:-left-10 lg:-left-32 lg:w-96 lg:h-96"></div>
      <div className="absolute top-64 left-12 w-72 h-72 bg-brand-secondary/10 rounded-full filter blur-3xl animate-blob animate-delay-3 mix-blend-multiply md:left-48 lg:w-96 lg:h-96"></div>
    </div>
  );
}
