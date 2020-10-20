const db = require("../db");

const getArticle = (id) => db.getArticle(id);

const getArticles = () => db.getArticles();

const createArticle = (article) => db.createArticle(article);

const updateArticle = (article) => db.updateArticle(article);

const deleteArticle = (id) => db.deleteArticle(id);

module.exports = {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
