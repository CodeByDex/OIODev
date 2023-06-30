import { User } from "../models";

export const typeDef = `
    type User {
        _id: ID
    }

    extend type Query {
        user(ID: ID!): User
        users: [User]
    }

`;

export const resolvers = {
    Query: {
        users: async () => {
            //TODO Implement User get
            return User.find({});
        },
        user: async (parent, { ID }) => {
            //TODO Implement User get
            return { _id: ID }
        }
    }
}