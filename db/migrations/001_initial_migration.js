const knex = require("../../knex");

module.exports = {
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
