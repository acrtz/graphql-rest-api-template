const { ApolloServer } = require("apollo-server-express");

const resolvers = require("./resolvers");
const context = require("./context");
const typeDefs = require("./typeDefs");

// Initialize Apollo Server
// typeDefs, resolvers and context are explained in their respective folders
// to learn more about ApolloServer initialization and all its options go to
// https://www.apollographql.com/docs/apollo-server/api/apollo-server
module.exports = new ApolloServer({
  typeDefs,
  resolvers,
  context, // Optional
});
