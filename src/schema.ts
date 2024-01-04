import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    users: [user!]!
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): user
    updateUser(username: String, email: String, password: String): user
    deleteUser: Boolean
  }

  type user {
    username: String
    email: String!
    password: String
  }
`;
