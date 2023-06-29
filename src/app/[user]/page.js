"use client"
import {useState} from 'react';
import InputField from './components/InputField';
//TODO add logic to pull user from URL to display correct user dashboard

const user = {
  firstName: "John",
  lastName: "Smith",
  email: "johnsmith@gmail.com"
}


export default function Dashboard() {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);

  const [showInput, setShowInput] = useState(false);

  return (
    <main className="flex flex-col gap-5 p-3">
      <h1 className="font-primary text-brand-textHeader text-6xl">
        Your Profile
      </h1>
      <div className="flex flex-col gap-4">
        <h2 className="font-secondary text-brand-secondary text-4xl ">First Name</h2>
        <InputField 
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
          handleClick={() => setShowInput(true)}
          handleBlur={() => setShowInput(false)}
          enableEditing={showInput}
        />
      </div>
    </main>
  );
}
