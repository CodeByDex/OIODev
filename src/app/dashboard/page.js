import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import UserPanel from "./components/tempUserPanel";
import ProfilePanel from "./components/tempProfilePanel";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session) {
    return <main>
      <h1>Comp</h1>
      <UserPanel {...session} /> 
      <ProfilePanel {...session} />
      </main>
  } else {
    return <main><p>Not logged in</p></main>
  }
}
