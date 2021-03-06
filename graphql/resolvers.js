// Provide resolver functions for your schema fields
// Resolvers are responsible for getting the data being
// queried. They are passed four arguments: parent, args,
// context, and info. To learn more about these arguments
// go to:
// https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
module.exports = {
  Query: {
    getArticle: (parent, args, context, info) =>
      context.dataSources.Article.getArticle(args.id),
    getArticles: (parent, args, context, info) =>
      context.dataSources.Article.getArticles(),
  },

  Mutation: {
    createArticle: (parent, args, context, info) =>
      context.dataSources.Article.createArticle(args.article),
    updateArticle: (parent, args, context, info) =>
      context.dataSources.Article.updateArticle(args.article),
    deleteArticle: (parent, args, context, info) =>
      context.dataSources.Article.deleteArticle(args.id),
  },
};
