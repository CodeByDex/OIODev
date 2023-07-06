"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faCalendarCheck,
  faRightFromBracket,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

export default function ProfileDash() {
  return (
    <form className="flex flex-col gap-2">
      <div className="flex flex-col">
        <label>First Name</label>
        <input
          className="bg-transparent font-primary text-brand-textHeader text-2xl"
          type="text"
          defaultValue="Zach"
        ></input>
      </div>
      <div className="flex flex-col">
        <label>Last Name</label>
        <input
          className="bg-transparent font-primary text-brand-textHeader text-2xl"
          type="text"
          defaultValue="Mutch"
        ></input>
      </div>
      <div className="flex flex-col">
        <label>Email</label>
        <input
          className="bg-transparent font-primary text-brand-textHeader text-2xl"
          type="text"
          defaultValue="zkmutch@gmail.com"
        ></input>
      </div>
      <div className="flex flex-col">
        <label>Company</label>
        <input
          className="bg-transparent font-primary text-brand-textHeader text-2xl"
          type="text"
          defaultValue="OSU Bootcamp"
        ></input>
      </div>
    </form>
  );
}
