import { User } from "../models";
import { gql } from "@apollo/server";
import {GraphQLError} from "graphql";

export const typeDef = gql`
    type User {
        _id: ID,
        email: String,
        name: String
    }

    extend type Query {
        user(ID: ID!): User
        users: [User]
    }

    extend type Mutation {
        updateUser(ID: ID!, name: String!): User
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
    },
    Mutation: {
        updateUser: async (parent, {ID, name}, contextValue) => {
            if (!contextValue.LoggedIn) {
                throw new GraphQLError('User is not authenticated', {
                    extensions: {
                      code: 'UNAUTHENTICATED',
                      http: { status: 401 },
                    },
                  });
            }
            return await User.findByIdAndUpdate(ID, {name}, {new: true});
        }
    }
}