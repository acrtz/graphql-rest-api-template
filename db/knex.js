const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: `${process.cwd()}/db/db.sqlite`,
  },
  useNullAsDefault: true,
});

module.exports = knex;
