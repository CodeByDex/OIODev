"use client";
import { useState } from "react";
import ProfilePanel from "./ProfilePanel";
import SettingsPanel from "./SettingsPanel";
import AppointmentDash from "./AppointmentPanel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarCheck,
  faRightFromBracket,
  faAngleRight,
  faGear,
} from "@fortawesome/free-solid-svg-icons";

export default function UserPanel(props) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="userDash--container flex bg-brand-primary/60 rounded-lg mb-6 mx-auto">
        <div className="bg-gray-200/5 rounded-lg h-full w-full">
          <div className="userDash--infoContainer p-5 flex flex-col items-center md:flex-row md:px-8 md:py-12 md:gap-4">
            <div className="flex mr-auto gap-4">
              <div className="userDash--imageContainer flex items-center">
                <img
                  src={props.user.image}
                  className="h-20 w-20 bg-brand-accent rounded-full md:h-24 md:w-24"
                ></img>
              </div>
              <div>
                <h4 className="userDash--title text-base">Welcome back,</h4>
                <h2 className="userDash--name font-semibold text-2xl leading-6 text-brand-textHeader sm:text-3xl md:text-4xl">
                  {props.user.name}
                </h2>
                <h4 className="userDash--email text-sm">{props.user.email}</h4>
              </div>
            </div>
          </div>
          <div className="userDash--linksContainer px-5 pb-5 flex gap-4 text-lg font-primary lg:flex-col md:px-8 lg:pb-10 lg:gap-2">
            <button
              onClick={() => toggleTab(1)}
              className="flex items-center justify-between"
            >
              <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faUser}
                  className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
                <p className="hidden sm:flex">Profile</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={
                  toggleState === 1 ? "hidden lg:flex w-4 h-4" : "hidden"
                }
              />
            </button>
            <button
              onClick={() => toggleTab(2)}
              className="flex items-center justify-between"
            >
              <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faCalendarCheck}
                  className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                />
                <p className="hidden sm:flex gap-1"><span className="hidden lg:flex">Upcoming</span>Appointments</p>
              </div>
              <FontAwesomeIcon
                icon={faAngleRight}
                className={
                  toggleState === 2 ? "hidden lg:flex w-4 h-4" : "hidden"
                }
              />
            </button>
            <button
                  onClick={() => toggleTab(3)}
                  className="flex items-center justify-between"
                >
                  <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
                    <FontAwesomeIcon
                      icon={faGear}
                      className="bg-brand-secondary/5 hover:bg-brand-secondary/10 delay-75 duration-300 text-brand-secondary p-2 rounded-lg w-5 h-5"
                    />
                    <p className="hidden sm:flex">Settings</p>
                  </div>
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className={
                      toggleState === 3 ? "hidden lg:flex w-4 h-4" : "hidden"
                    }
                  />
                </button>
            <button
              href="/dashboard"
              className="flex items-center justify-between"
            >
              <div className="delay-75 duration-300 py-1 rounded-lg w-fill flex items-center gap-3">
                <FontAwesomeIcon
                  icon={faRightFromBracket}
                  className="bg-brand-accent/5 hover:bg-brand-accent/10 delay-75 duration-300 text-brand-accent p-2 rounded-lg w-5 h-5"
                />
                <p className="hidden sm:flex">Log Out</p>
              </div>
              <FontAwesomeIcon icon={faAngleRight} className="w-4 h-4 hidden" />
            </button>
          </div>
        </div>
      </section>
      <section className="flex flex-grow items-center bg-brand-primary/60 rounded-lg mb-6 mx-auto">
        {/* Portfolio form dashboard component */}
        <div
          className={`bg-gray-200/5 rounded-lg w-full h-full md:px-8 md:pb-12 ${
            toggleState === 1 ? "" : "hidden"
          }
                  `}
        >
          <ProfilePanel {...props} />
        </div>
        {/* Upcoming appoinments dashboard component */}
        <div
          className={`bg-gray-200/5 rounded-lg w-full h-full md:px-8 md:py-12 ${
            toggleState === 2 ? "" : "hidden"
          }
                  `}
        >
          <AppointmentDash />
        </div>
        {/* User form dashboard component */}
        <div
          className={`bg-gray-200/5 rounded-lg w-full h-full md:px-8 md:pb-12 ${
            toggleState === 3 ? "" : "hidden"
          }
                  `}
        >
          <SettingsPanel {...props} />
        </div>
      </section>
    </>
  );
}
