

export const typeDef = `
    type User {
        _id: String
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
            return [{ _id: 1 }];
        },
        user: async (parent, { ID }) => {
            //TODO Implement User get
            return { _id: ID }
        }
    }
}