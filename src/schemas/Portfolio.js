import { Portfolio } from "../models/";
import { gql } from "@apollo/server";

export const typeDef = gql`
    type Portfolio {
        _id: ID
        firstName: String
        lastName: String
        title: String
        bio: String
        rateLow: Number
        rateHigh: Number
        portfolioUrl: String
        githubUrl: String
        linkedinUrl: String
        available: Boolean
    }

    extend type Query {
        portfolio(ID: ID!): Portfolio
        portfolios: [Portfolio]
    }
`

export const resolvers = gql`

`