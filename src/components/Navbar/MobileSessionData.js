"use client";
import { useSession, signIn } from "next-auth/react";

export default function MobileSessionData() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex justify-end gap-3 pt-8 pb-5 items-center border-b border-gray-800">
        <img
          className="rounded-full h-fit"
          alt="Your Profile Picture"
          src={session.user.image}
          width={30}
          height={30}
        />
        <p className="font-primary text-xl cursor-default text-brand-textHeader">
          {session.user.name}
        </p>
      </div>
    );
  }
  return <></>;
}
