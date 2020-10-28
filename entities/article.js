const knex = require("../db/knex");

const getArticle = (id) =>
  knex("articles")
    .where({ id })
    .then(([article]) => article);

const getArticles = () => knex("articles");

const createArticle = (article) =>
  knex("articles")
    .insert(article)
    .then(([id]) => knex("articles").where({ id }).first());

const updateArticle = (article) =>
  knex("articles")
    .where({ id: article.id })
    .update(article)
    .then(() => knex("articles").where({ id: article.id }).first());

const deleteArticle = (id) =>
  knex("articles")
    .where({ id })
    .del()
    .then(() => id);

module.exports = {
  getArticle,
  getArticles,
  createArticle,
  updateArticle,
  deleteArticle,
};
