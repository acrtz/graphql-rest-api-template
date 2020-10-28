const { ApolloServer } = require("apollo-server-express");

const resolvers = require("./resolvers");
const context = require("./context");
const typeDefs = require("./typeDefs");
const entities = require("../entities");

const dataSources = () => entities;

// Initialize Apollo Server
// typeDefs, resolvers and context are explained in their respective folders
// to learn more about ApolloServer initialization and all its options go to
// https://www.apollographql.com/docs/apollo-server/api/apollo-server
const apolloServer = new ApolloServer({
  dataSources,
  context, // Optional
  resolvers,
  typeDefs,
});

module.exports = {
  apolloServer,
  ApolloServer,
  context,
  dataSources,
  entities,
  resolvers,
  typeDefs,
};
