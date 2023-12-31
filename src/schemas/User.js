import { User } from "../models";
import { IsAuthenticated } from "./util";
import {GraphQLError} from "graphql";

export const typeDef = `
    type User {
        _id: ID,
        email: String,
        name: String, 
        image: String,
        company: String
    }

    extend type Query {
        user(ID: ID!): User
        users: [User]
    }

    extend type Mutation {
        updateUser(ID: ID!, name: String!, email: String!, image: String, company: String): User
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
        updateUser: async (parent, {ID, name, email, image, company}, contextValue) => {
            IsAuthenticated(contextValue);

            if(ID != contextValue.user.id) {
                throw new GraphQLError('User is not Authorized to Update this record', {
                    extensions: {
                        code: 'UNAUTHENTICATED',
                        http: { status: 401 },
                    },
                });
            }

            return await User.findByIdAndUpdate(ID, {name, email, image, company}, {new: true});
        }
    }
}


