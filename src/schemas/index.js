import { makeExecutableSchema } from "@graphql-tools/schema";
import { merge } from "lodash";

import { 
    typeDef as User,
    resolvers as UserResolver
    } from "./User";

import {
    typeDef as Portfolio,
    resolvers as PortfolioResolver 
} from "./Portfolio";

const GlobalQuery = `#graphql
    type Query {
        _empty: String
    }

    type Mutation {
        _empty: String
    }
`;

const GlobalResolvers = {};

export const schema = makeExecutableSchema({
    typeDefs: [GlobalQuery, User, Portfolio],
    resolvers: merge(GlobalResolvers, UserResolver, PortfolioResolver)
});

