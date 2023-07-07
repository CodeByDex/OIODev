import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProfileForm() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  return (
    <div className="flex flex-col">
      <button
        onClick={handleEditClick}
        className="flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto"
      >
        <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
          <p className="flex gap-1">Edit<span className="hidden md:flex">Profile</span></p>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
        </div>
      </button>
      <form className="flex flex-col gap-2 p-5 pt-0 md:p-0">
        <div className="flex">
          <div className="flex flex-col w-1/2">
            <label className="text-sm md:text-base">First Name</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg ${
                isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
                isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
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
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="url"
            defaultValue="https://linkedin.com/in/zachmutch/"
            readOnly={!isEditable}
          ></input>
        </div>
        <div className="flex items-center">
          <input
            className="bg-transparent font-primary text-brand-textHeader text-base md:text-lg my-1 mr-3"
            type="checkbox"
            defaultValue="true"
            readOnly={!isEditable}
          />
          <label className="text-sm md:text-base">Available for Work</label>
        </div>
      </form>
    </div>
  );
}
