import { Portfolio } from "../models/";

export const typeDef = `
    type Portfolio {
        _id: ID
        firstName: String
        lastName: String
        title: String
        bio: String
        rate: Float
        portfolioUrl: String
        githubUrl: String
        linkedinUrl: String
        available: Boolean
    }

    input portfolioInput {
        firstName: String
        lastName: String
        title: String
        bio: String
        rate: Float
        portfolioUrl: String
        githubUrl: String
        linkedinUrl: String
        available: Boolean   
    }

    extend type Query {
        portfolio(ID: ID!): Portfolio
        portfolios: [Portfolio]
    }
    
    extend type Mutation {
        updatePortfolio(portfolio: portfolioInput, ID: ID): Portfolio
        createPortfolio(portfolio: portfolioInput): Portfolio
    }
`

export const resolvers = {
    Query: {
        portfolios: async () => {
            return await Portfolio.find({});
        },
        
        portfolio: async (parent, { portfolioID }) => {
            return await Portfolio.findById(portfolioID);
        },
    },

    Mutation: {
        updatePortfolio: async(parent, args) => {
            return await Portfolio.findOneAndUpdate({_id: args.ID }, {$set: {...args.portfolio}}, {upsert: true, new: true});
        },

        createPortfolio: async(parent, args) => {
            return await Portfolio.create({...args.portfolio});
        }
    }
}