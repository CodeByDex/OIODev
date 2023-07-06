import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import { mongoClient } from "../../../config/mongodb";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
            //function is called at account creation to create the users object
            profile(profile) {
                return { 
                    //the id prop is required, and will be persisted to the accounts collection in the db.
                    id: profile.id,
                    //The following are custom fields we can save to the users collection
                    //They are only initalized at account creation, they will not update on user login
                    name: profile.name,
                    email: profile.email,
                    image: profile.avatar_url,
                    githubProfile: profile.html_url,
                    githubUserName: profile.login,
                    created_at: new Date(),
                    role: "user"
                }
            }
        })
    ],
    adapter: MongoDBAdapter(
        mongoClient
    ),
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
