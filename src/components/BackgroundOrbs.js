"use client";
import "tailwindcss/tailwind.css";

export default function BackgroundOrbs() {
  return (
    <div className="backgroundOrbs--container">
      <div className="absolute top-20 -left-20 w-72 h-72 bg-brand-accent/5 rounded-full filter blur-xl animate-blob mix-blend-multiply md:-left-10"></div>
      <div className="absolute top-64 left-12 w-72 h-72 bg-brand-secondary/5 rounded-full filter blur-xl animate-blob animate-delay-3 mix-blend-multiply md:left-48"></div>
    </div>
  );
}
