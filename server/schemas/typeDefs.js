const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type foo {
        _id: ID,
        foo: String
    }

    type Query {
        foo: String
    }
`;

module.exports = typeDefs;