const { Umzug } = require("umzug");
const knex = require("../knex");

// customize how migration history is stored and retrieved
const MigrationStorage = {
  // records that a migration has already been run
  logMigration: (name) => knex("migrations").insert({ name }),
  // removes the record or a migration
  unlogMigration: (name) => knex("migrations").where({ name }).del(),
  // returns a list of names of migrations that have been run
  executed: async () => {
    const migrationsExist = await knex.schema.hasTable("migrations");

    console.log({ migrationsExist });

    if (!migrationsExist) {
      return knex.schema.createTable("migrations", (table) => {
        table.increments("id").primary();
        table.string("name");
        return [];
      });
    }

    return knex("migrations").then((res) =>
      res.map((migration) => migration.name)
    );
  },
};

const run = async () => {
  const umzug = new Umzug({
    migrations: { glob: `${process.cwd()}/db/migration/migrations/*.js` },
    storage: MigrationStorage,
  });

  const endPoint = "001_initial_migration";

  const pending = await umzug.pending();

  if (pending.some(({ name }) => name === endPoint)) {
    umzug.up({ to: endPoint });
  }
};

module.exports = { run };
