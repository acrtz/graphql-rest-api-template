// Database migration also know as schema migration is an incredibaly useful tool
// for working with an evolving database. It can be annoying to keep everyone's
// local development database up to date. By committing db changes to the source
// code those changes only need to be written once and then they can automatically
// run for the whole team, and can be rolled out consistently to development, staging,
// and production environments without each environment's database needing to be
// touched directly.

// As soon as you run this project locally you should notice that the file ./db/db.sqlite
// appears all of a sudden. This highlights the utility of database migrations. Without
// you having to do anything the database was created and had tables and data added to it.
// If in the future another table/column is added or altered via migrations you will also
// automatical get those updates after pulling the source code.

// Umzug (https://github.com/sequelize/umzug) is a migration tool with a simple API
// for running and rolling back tasks. It makes it easy to run database migrations,
// regardless of the database you are using.
const { Umzug } = require("umzug");
const knex = require("../knex");

// Migrations are written in the migrations folder. Look
// at the 001_initial_migration.js migration to see the
// general format.
// Setting an end point allows for creating new migrations
// without having them run before they are ready.
const END_POINT = "001_initial_migration";

// customize how migration history is stored and retrieved
// migration information can be stored in the local file system
// or in a database
const MigrationStorage = {
  // records that a migration has already been run
  logMigration: (name) => knex("migrations").insert({ name }),
  // removes the record of a migration
  unlogMigration: (name) => knex("migrations").where({ name }).del(),
  // returns a list of names of migrations that have been run
  executed: async () => {
    // The first time the server is started or before adding a migrations
    // table to the database migrations won't exist yet.
    const migrationsExist = await knex.schema.hasTable("migrations");

    // if there isn't a migrations table yet we create it, and return
    // and empty array to show that no migrations have been run yet.
    if (!migrationsExist) {
      return knex.schema.createTable("migrations", (table) => {
        table.increments("id").primary();
        table.string("name");
        return [];
      });
    }

    //return an array of the executed migrations.
    return knex("migrations").then((res) =>
      res.map((migration) => migration.name)
    );
  },
};

// Runs all pending migrations up to specified END_POINT. Because our migrations
// are automatically run on server restart we only implement running the migrations
// and not rolling them back.
const run = async () => {
  const umzug = new Umzug({
    migrations: {
      glob: [`${process.cwd()}/db/migrations/*.js`, { ignore: "index.js" }],
    },
    storage: MigrationStorage,
  });

  const pending = await umzug.pending();

  if (pending.some(({ name }) => name === END_POINT)) {
    umzug.up({ to: END_POINT });
  }
};

module.exports = { run };
