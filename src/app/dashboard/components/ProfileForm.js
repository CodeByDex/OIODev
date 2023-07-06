"use client";
import { useState } from "react";

export default function ProfileForm() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  return (
    <form className="flex flex-col gap-2 p-5 md:p-0">
      <div className="flex">
        <div className="flex flex-col w-1/2">
          <label className="text-sm md:text-base">First Name</label>
          <input
            className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
              isEditable
                ? "bg-brand-primary caret-brand-accent"
                : "bg-transparent outline-none"
            }`}
            type="text"
            defaultValue="Zach"
            readOnly={!isEditable}
          ></input>
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-sm md:text-base">Last Name</label>
          <input
            className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
              isEditable
                ? "bg-brand-primary caret-brand-accent"
                : "bg-transparent outline-none"
            }`}
            type="text"
            defaultValue="Mutch"
            readOnly={!isEditable}
          ></input>
        </div>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">Email</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="text"
          defaultValue="zkmutch@gmail.com"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">Company</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="text"
          defaultValue="OSU Bootcamp"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">Title</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="text"
          defaultValue="Front-end Developer"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col w-fit">
        <label className="text-sm md:text-base">Rates</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="number"
          defaultValue="300"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">Bio</label>
        <textarea
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          rows="5"
          defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          readOnly={!isEditable}
        ></textarea>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">Portfolio URL</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="url"
          defaultValue="https://www.thatdevguy.app/"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">GitHub URL</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="url"
          defaultValue="https://github.com/that-devguy"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex flex-col">
        <label className="text-sm md:text-base">LinkedIn URL</label>
        <input
          className={`font-primary text-brand-textHeader text-lg my-1 mr-4 ${
            isEditable
              ? "bg-brand-primary caret-brand-accent"
              : "bg-transparent outline-none"
          }`}
          type="url"
          defaultValue="https://linkedin.com/in/zachmutch/"
          readOnly={!isEditable}
        ></input>
      </div>
      <div className="flex items-center">
        <input
          className="bg-transparent font-primary text-brand-textHeader text-lg my-1 mr-3"
          type="checkbox"
          defaultValue="true"
          readOnly={!isEditable}
        />
        <label className="text-sm md:text-base">Available for Work</label>
      </div>
    </form>
  );
}
