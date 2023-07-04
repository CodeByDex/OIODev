"use client";
import { useState } from "react";
// import InputField from "./components/InputField";
import UserDash from "./components/UserDash";
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
    <div>
      <UserDash />
    </div>
  );
  // return (
  //   <main className="flex flex-col gap-5">
  //     <h1 className="font-primary text-brand-textHeader text-2xl m-w-full">
  //       User Dashboard Page
  //     </h1>
  //     <div className="flex flex-col gap-6">
  //       <h2 className="font-secondary text-brand-secondary text-4xl">First Name</h2>
  //       <InputField
  //         value={firstName}
  //         handleChange={(e) => setFirstName(e.target.value)}
  //         placeholder="Enter your first name"
  //       />
  //       <h2 className="font-secondary text-brand-secondary text-4xl">Last Name</h2>
  //       <InputField
  //         value={lastName}
  //         handleChange={(e) => setLastName(e.target.value)}
  //         placeholder="Enter your last name"
  //       />
  //       <h2 className='font-secondary text-brand-secondary text-4xl'>Email Address</h2>
  //       <InputField
  //         value={email}
  //         handleChange={(e) => setEmail(e.target.value)}
  //         placeholder="Enter your email"
  //       />
  //     </div>
  //   </main>
  // );
}
