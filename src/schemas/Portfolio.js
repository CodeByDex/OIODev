import { Portfolio } from "../models/";
import { ObjectId } from "mongodb";
import { IsAuthenticated } from "./util";

export const typeDef = `
    type Portfolio {
        _id: ID
        user: ID
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
        user: ID
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
        getUserPortfolioByUser(user: ID!): Portfolio
    }
    
    extend type Mutation {
        updatePortfolio(portfolio: portfolioInput, ID: ID): Portfolio
        createPortfolio(portfolio: portfolioInput): Portfolio
        createPortfolioByField(user: ID, firstName: String, lastName: String, title: String, bio: String, rate: Float, portfolioUrl: String, githubUrl: String, linkedinUrl: String, available: Boolean ): Portfolio
        updatePortfolioByField(portID: ID, user: ID, firstName: String, lastName: String, title: String, bio: String, rate: Float, portfolioUrl: String, githubUrl: String, linkedinUrl: String, available: Boolean ): Portfolio
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

        getUserPortfolioByUser: async (parent, { user }) => {
            return await Portfolio.findOne({user: new ObjectId(user)});
        }
    },

    Mutation: {
        updatePortfolio: async(parent, args, context) => {
            IsAuthenticated(context);

            return await Portfolio.findOneAndUpdate({_id: args.ID, user: new ObjectId(context.user.id) }, {$set: {...args.portfolio}}, {upsert: true, new: true});
        },

        createPortfolio: async(parent, args, context) => {
            IsAuthenticated(context);

            return await Portfolio.create({...args.portfolio});
        },

        createPortfolioByField: async (parent, args, context) => {
            IsAuthenticated(context);

            return await Portfolio.create({...args})
        },

        updatePortfolioByField: async (parent, args, context) => {
            IsAuthenticated(context);

            return await Portfolio.findOneAndUpdate({_id: args.portID, user: new ObjectId(context.user.id) }, {$set: {...args}}, {upsert: true, new: true});
        }
    }
}