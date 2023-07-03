import { Portfolio } from "../models/";
import { gql } from "@apollo/server";

export const typeDef = gql`
    type Portfolio {
        _id: ID!
        firstName: String!
        lastName: String!
        title: String!
        bio: String!
        rateLow: Number!
        rateHigh: Number!
        portfolioUrl: String!
        githubUrl: String
        linkedinUrl: String
        available: Boolean!
    }

    input portfolioInput {
        _id: ID!
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
    
    extend type Mutation($portfolio: portfolioInput) {
        updatePortfolio(portfolio: $portfolio): Portfolio
    }
`

export const resolvers = {
    portfolios: async () => {
        return await Portfolio.find({});
    },
    
    portfolio: async (parent, { portfolioID }) => {
        return await Portfolio.findById(portfolioID);
    },

    updatePortfolio: async(parent, args) => {
        return await Portfolio.findOneAndUpdate({_id: args.id }, {$set: {...args}});
    }
}