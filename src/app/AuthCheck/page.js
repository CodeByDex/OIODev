import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]";


export default async function Services() {
    const session = await getServerSession(authOptions);

    if (session) {
        return ( 
            <main>
                <p>{session.user.name} is authorized to see this page with role {session.user.role}</p>
            </main>
        )
    } else {
        return ( 
            <main>
                <p>You are NOT authorized to see this page.</p>
            </main>
        )
    }
}
