import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import UserPanel from "./components/tempUserPanel";
import ProfilePanel from "./components/tempProfilePanel";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <main className="flex-col my-8 lg:my-16">
        <div className="mb-8 items-stretch mx-auto max-w-6xl gap-5 lg:flex">
          <UserPanel {...session} />
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <p>Not logged in</p>
      </main>
    );
  }
}
