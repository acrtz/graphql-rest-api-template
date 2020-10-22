const { gql } = require("apollo-server-express");

// typeDefs are what we use to define our schema.
// Techinically apollo uses the typeDefs and the resolvers
// to generate the schema, but if there are an error messages
// refering to something missing in the schema then it is
// refering to the typeDefs. To learn more about building a
// schema go to:
// https://www.apollographql.com/docs/apollo-server/schema/schema/
const typeDefs = gql`
  type Query {
    getArticle(id: String!): Article
    getArticles: [Article]
  }

  type Mutation {
    createArticle(article: ArticleInput!): String
    updateArticle(article: ArticleInput!): String
    deleteArticle(id: String!): String
  }

  type Article {
    id: String
    title: String
    content: String
  }

  input ArticleInput {
    id: String
    title: String
    content: String
  }
`;

module.exports = typeDefs;
