const Article = require("../api/article");
// Provide resolver functions for your schema fields
module.exports = {
  Query: {
    getArticle: (parent, params, context) => Article.getArticle(params.id),
    getArticles: (parent, params, context) => Article.getArticles(),
  },

  Mutation: {
    createArticle: (parent, params, context) =>
      Article.createArticle(params.article),
    updateArticle: (parent, params, context) =>
      Article.updateArticle(params.article),
    deleteArticle: (parent, params, context) =>
      Article.deleteArticle(params.id),
  },
};
