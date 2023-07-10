import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image"

export default function UserDisplayData() {
  const { data: session } = useSession()
  const Console = () => {
    console.log(session)
  }
  if (session) {
    return (
      <>
        <p>Hello, {session.user.name}</p>
        <button onClick={() => Console()}>console.log</button>
        <Image className=" rounded-full hover: bg-white" src={session.user.image}
        width={30}
        height={30} />
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