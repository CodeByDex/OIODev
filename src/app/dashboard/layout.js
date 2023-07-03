"use client";
import { useState } from "react";
import InputField from "./components/InputField";
import UserDash from "./components/UserCard";
//TODO add logic to pull user from URL to display correct user dashboard
//just a placeholder user for now
const user = {
  firstName: "John",
  lastName: "Smith",
  email: "johnsmith@gmail.com",
};

export default function Dashboard() {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  return (
    <main className="flex-col">
      <div className="flex mb-8 items-center mx-auto max-w-6xl">
        <div>
          <UserDash />
        </div>
        <div>forms</div>
      </div>
    </main>
  );
}
