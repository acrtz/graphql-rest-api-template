// knex is a query builder that provides a simple and consistent
// interface for working with a variety of relational databases.
// I chose it for this template/tutorial because it is one of the
// nicer tools for working with sqlite. I normally use postgres
// with pg-promise for my databases but opted for sqlite in this
// case since it comes pre-installed on most systems and wouldn't
// require configuration or setup.
// For more information on knex go to: https://knexjs.org/

// This module could easly be switched out to mongoose - mongoDB,
// pg-promise - postgres, etc.
const knex = require("knex")({
  client: "sqlite3",
  connection: {
    filename: `${process.cwd()}/db/db.sqlite`,
  },
  useNullAsDefault: true,
});

module.exports = knex;
