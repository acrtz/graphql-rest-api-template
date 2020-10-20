const { gql } = require("apollo-server-express");

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
