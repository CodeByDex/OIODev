import { User } from "../models";

export const typeDef = `
    type User {
        _id: ID,
        email: String,
        firstName: String,
        lastName: String,
        password: String,
        company: String
    }

    extend type Query {
        user(ID: ID!): User
        users: [User]
    }
`;

export const resolvers = {
    Query: {
        users: async () => {
            return await User.find({});
        },
        user: async (parent, { ID }) => {
            return await User.findById(ID);
        }
    }
}