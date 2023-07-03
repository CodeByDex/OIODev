"use client";
import { useState } from "react";
//TODO add logic to pull user from URL to display correct user dashboard

export default function Layout(props) {
  return (
    <main className="flex-col">
      <div className="flex flex-grow mb-8 items-center mx-auto max-w-6xl gap-6">
        {props.children}
        {props.profile}
      </div>
    </main>
  );
}
