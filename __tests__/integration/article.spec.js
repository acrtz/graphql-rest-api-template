process.env.NODE_ENV = "test";

const request = require("supertest");
const app = require("../app");
const migrations = require("../db/migrations");
const knex = require("../db/knex");
const Article = require("./__utils/article");

const normalize = ({ statusCode, body: { data, errors } = {} }) => ({
  statusCode,
  errors,
  ...data,
});

const DEFAULT_ARTICLES = [
  { id: 1, title: "title for article1", content: "content for article1" },
  { id: 2, title: "title for article2", content: "content for article2" },
  { id: 3, title: "title for article3", content: "content for article3" },
];

describe("Articles Integration", () => {
  beforeAll(() => {
    return migrations.run();
  });

  beforeEach(async () => {
    // clean out articles table
    await knex.raw("DELETE FROM articles");
    await knex("articles").insert(DEFAULT_ARTICLES);
  });

  it("getArticles", async () => {
    const { getArticles, statusCode } = await request(app)
      .post("/graphql")
      .send({
        query: Article.GET_ARTICLES,
      })
      .then(normalize);

    expect(statusCode).toEqual(200);
    expect(getArticles).toMatchObject(DEFAULT_ARTICLES);
  });

  it("getArticle", async () => {
    const { getArticle, statusCode, errors } = await request(app)
      .post("/graphql")
      .send({
        query: Article.GET_ARTICLE,
        variables: { id: 1 },
      })
      .then(normalize);

    expect(statusCode).toEqual(200);
    expect(getArticle).toMatchObject(DEFAULT_ARTICLES[0]);
  });

  it("createArticle", async () => {
    const article = {
      title: "new test article",
      content: "content for new test article",
    };
    const { newArticle, statusCode } = await request(app)
      .post("/graphql")
      .send({
        query: Article.CREATE_ARTICLE,
        variables: { article },
      })
      .then(normalize);

    expect(statusCode).toEqual(200);
    expect(newArticle).toMatchObject(article);
  });

  it("updateArticle", async () => {
    const article = {
      id: DEFAULT_ARTICLES[0].id,
      title: DEFAULT_ARTICLES[0].title + "(UPDATED)",
      content: DEFAULT_ARTICLES[0].content + "(UPDATED)",
    };

    const { updatedArticle, statusCode } = await request(app)
      .post("/graphql")
      .send({
        query: Article.UPDATE_ARTICLE,
        variables: { article },
      })
      .then(normalize);

    expect(statusCode).toEqual(200);
    expect(updatedArticle).toMatchObject(article);
  });

  it("deleteArticle", async () => {
    const id = 1;
    const { deletedArticleId, statusCode, errors } = await request(app)
      .post("/graphql")
      .send({
        query: Article.DELETE_ARTICLE,
        variables: { id },
      })
      .then(normalize);

    expect(statusCode).toEqual(200);
    expect(deletedArticleId).toBe(id);
  });
});
