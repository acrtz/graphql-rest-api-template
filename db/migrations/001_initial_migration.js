// knex is a query builder that is interfacing with our
// sqlite database. It is not required and you chould
// choose to use any technology you want for interacting
// with your db. Look in its corresponding file for more
// information on knex and why this template is using
// sqlite.
const knex = require("../knex");

// umzug migrations are an object with an up and down functions.
// up runs the migration and down rolls back the migration. We
// only implement the up functionality since our migrations run
// automatically and often aren't easily reversible.

module.exports = {
  // Our initial migration creates a new 'articles' table and
  // populates it with initial values.
  up: async () => {
    await knex.schema.createTable("articles", (table) => {
      table.increments("id").primary();
      table.string("title");
      table.string("content");
    });

    await knex("articles").insert([
      {
        title: "First Article",
        content: "Some content just to fill up this article",
      },
      {
        title: "Second Article",
        content: "Content for the second article blah blah blah",
      },
    ]);
  },
  down: async () => {},
};
