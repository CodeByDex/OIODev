"use client";
import "tailwindcss/tailwind.css";

export default function BackgroundOrbs() {
  return (
    <div className="backgroundOrbs--container">
      <div className="absolute top-20 -left-6 w-72 h-72 bg-brand-accent/10 rounded-full filter blur-3xl"></div>
      <div className="absolute top-60 left-6 w-72 h-72 bg-brand-secondary/10 rounded-full filter blur-3xl"></div>
    </div>
  );
}
