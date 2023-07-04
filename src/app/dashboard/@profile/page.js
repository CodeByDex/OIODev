"use client";
import { useState } from "react";
import ProfileDash from "../components/ProfileDash";
//TODO add logic to pull user from URL to display correct user dashboard
//just a placeholder user for now
const user = {
  firstName: "John",
  lastName: "Smith",
  email: "johnsmith@gmail.com",
};

export default function Profile() {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  return (
    <div className="flex flex-grow">
      <ProfileDash />
    </div>
  );
}
