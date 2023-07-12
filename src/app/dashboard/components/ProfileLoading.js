"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export default function ProfileLoading() {
  return (
    <>
      <div className="flex flex-col">
        {/* Edit and Save Button */}
        <button className="flex items-center justify-end text-lg font-primary pt-5 pr-5 md:pr-0 w-fit ml-auto">
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
        {/* Form */}
        <form className="flex flex-col gap-2 p-5 pt-0 md:p-0">
          <div className="flex">
            {/* First and Last Name Field */}
            <div className="flex flex-col w-1/2">
              <label className="text-sm md:text-base">First Name</label>
              <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
            </div>
            <div className="flex flex-col w-1/2">
              <label className="text-sm md:text-base">Last Name</label>
              <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
            </div>
          </div>
          {/* Title Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Title</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Rate Field */}
          <div className="flex flex-col w-fit">
            <label className="text-sm md:text-base">Hourly Rate</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Bio Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Bio</label>
            <div className="bg-gray-800 w-full h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
            <div className="flex">
              <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
              <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
            </div>
            <div className="flex">
              <div className="bg-gray-800 w-1/4 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
              <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
              <div className="bg-gray-800 w-1/4 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
            </div>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Portfolio Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Portfolio URL</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Github Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">GitHub URL</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* LinkedIn Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">LinkedIn URL</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Calendly Field */}
          <div className="flex flex-col">
            <label className="text-sm md:text-base">Calendly URL</label>
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
          {/* Availability Field */}
          <div className="flex items-center">
            <div className="bg-gray-800 w-1/2 h-6 md:h-7 md:text-lg my-1 mr-4 px-2 -mx-2 rounded-lg animate-pulse" />
          </div>
        </form>
      </div>
    </>
  );
}
