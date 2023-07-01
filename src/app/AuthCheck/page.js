import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]";


export default async function Services() {
    const session = await getServerSession(authOptions);

    if (session) {
        return ( 
            <div>
                <p>{session.user.name} is authorized to see this page.</p>
            </div>
        )
    } else {
        return ( 
            <div>
                <p>You are NOT authorized to see this page.</p>
            </div>
        )
    }
}
