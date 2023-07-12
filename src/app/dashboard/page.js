import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import DashboardNavPanel from "./components/DashboardNavPanel";


export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (session) {
    return (
      <main className="flex-col my-8 lg:my-16">
        <div className="mb-8 items-stretch mx-auto max-w-6xl gap-5 lg:flex">
          <DashboardNavPanel {...session} />
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
