import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function MobileSessionData() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        <div className="flex flex-row">
          <p className="pr-5">{session.user.name}</p>
          <Image
          className=" rounded-full hover: bg-white mb"
          src={session.user.image}
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