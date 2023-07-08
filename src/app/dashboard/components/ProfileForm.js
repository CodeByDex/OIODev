import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

//TODO add logic to pull user from URL to display correct user dashboard
//just a placeholder user for now
const user = {
  firstName: "John",
  lastName: "Smith",
  email: "johnsmith@gmail.com",
  company: "Google",
  title: "Full-stack Developer",
  rates: "100",
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  portfolioUrl: "https://www.portfoliolink.com/",
  githubUrl: "https://github.com/",
  linkedinUrl: "https://www.linkedin.com/",
  available: true,
};

export default function ProfileForm() {
  const [isEditable, setIsEditable] = useState(false);

  const handleEditClick = () => {
    setIsEditable(true);
  };

  const handleSaveClick = () => {
    setIsEditable(false);
  };

  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [company, setCompany] = useState(user.company);
  const [title, setTitle] = useState(user.title);
  const [rates, setRates] = useState(user.rates);
  const [bio, setBio] = useState(user.bio);
  const [portfolioUrl, setPortfolioUrl] = useState(user.portfolioUrl);
  const [githubUrl, setGithubUrl] = useState(user.githubUrl);
  const [linkedinUrl, setLinkedinUrl] = useState(user.linkedinUrl);
  const [available, setAvailable] = useState(user.available);

  return (
    <div className="flex flex-col">
      {/* Edit and Save Button */}
      <button
        onClick={handleEditClick}
        className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${
          isEditable ? "hidden" : ""
        } `}
      >
        <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
          <p className="flex gap-1">
            Edit<span className="hidden md:flex">Profile</span>
          </p>
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent p-2 rounded-lg w-5 h-5"
          />
        </div>
      </button>
      <button
        onClick={handleSaveClick}
        className={`flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto ${
          isEditable ? "" : "hidden"
        } `}
      >
        <div className="delay-75 duration-300 rounded-lg flex items-center gap-3">
          <p className="flex gap-1">
            Save<span className="hidden md:flex">Changes</span>
          </p>
          <FontAwesomeIcon
            icon={faFloppyDisk}
            className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
          />
        </div>
      </button>
      {/* Form */}
      <form className="flex flex-col gap-2 p-5 pt-0 md:p-0">
        <div className="flex">
          {/* First and Last Name Field */}
          <div className="flex flex-col w-1/2">
            <label className="text-sm md:text-base">First Name</label>
            <input
              className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg ${
                isEditable
                  ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                  : "bg-transparent outline-none"
              }`}
              type="text"
              value={firstName}
              handleChange={(e) => setFirstName(e.target.value)}
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
              value={lastName}
              handleChange={(e) => setLastName(e.target.value)}
              readOnly={!isEditable}
            ></input>
          </div>
        </div>
        {/* Email Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">Email</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Company Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">Company</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="text"
            value={company}
            handleChange={(e) => setCompany(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Title Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">Title</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="text"
            value={title}
            handleChange={(e) => setTitle(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Rates Field */}
        <div className="flex flex-col w-fit">
          <label className="text-sm md:text-base">Rates</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="number"
            value={rates}
            handleChange={(e) => setRates(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Bio Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">Bio</label>
          <textarea
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            rows="5"
            value={bio}
            handleChange={(e) => setBio(e.target.value)}
            readOnly={!isEditable}
          ></textarea>
        </div>
        {/* Portfolio Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">Portfolio URL</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="url"
            value={portfolioUrl}
            handleChange={(e) => setPortfolioUrl(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Github Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">GitHub URL</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="url"
            value={githubUrl}
            handleChange={(e) => setGithubUrl(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* LinkedIn Field */}
        <div className="flex flex-col">
          <label className="text-sm md:text-base">LinkedIn URL</label>
          <input
            className={`font-primary text-brand-textHeader text-base md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg  ${
              isEditable
                ? "bg-brand-primary/50 caret-brand-accent outline-none border-none"
                : "bg-transparent outline-none"
            }`}
            type="url"
            value={linkedinUrl}
            handleChange={(e) => setLinkedinUrl(e.target.value)}
            readOnly={!isEditable}
          ></input>
        </div>
        {/* Availability Field */}
        <div className="flex items-center">
          <input
            className="bg-transparent font-primary text-brand-textHeader text-base md:text-lg my-1 mr-3"
            type="checkbox"
            value={available}
            handleChange={(e) => setAvailable(e.target.value)}
            readOnly={!isEditable}
          />
          <label className="text-sm md:text-base">Available for Work</label>
        </div>
      </form>
    </div>
  );
}
