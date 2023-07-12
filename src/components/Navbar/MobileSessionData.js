"use client"
import { useSession, signIn } from "next-auth/react"


export default function MobileSessionData() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className="flex flex-row items center">
          <p className=" pr-10 text-brand-accent">{session.user.name}</p>
          <img
          className="rounded-full hover: bg-white mb"
          src={session.user.image}
          alt="Your profile Picture"
          width={30}
          height={30}
          />
        </div>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}