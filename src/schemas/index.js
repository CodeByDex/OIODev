import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { 
    typeDef as User,
    resolvers as UserResolver
    } from "./User";

const GlobalQuery = `#graphql
    type Query {
        _empty: String
    }
`;

const GlobalResolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [GlobalQuery, User],
    resolvers: merge(GlobalResolvers, UserResolver)
});

