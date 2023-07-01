import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../config/mongodb";

export const authOptions = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET,
        })
    ],
    adapter: MongoDBAdapter(clientPromise),
    secret: process.env.NEXTAUTH_SECRET
}

export default NextAuth(authOptions)
