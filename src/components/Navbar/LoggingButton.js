"use client"
import { useSession, signIn, signOut } from "next-auth/react"

export default function LoggingButton() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <button className="pb-3 text-right hover:text-brand-textHover" onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <button className= "pb-3 text-right hover:text-brand-textHover" onClick={() => signIn()}>Sign in</button>
    </>
  )
}