const dbMigration = require("./db/migrations");
const app = require("./app");
const PORT = process.env.PORT || 4000;

// Tell the server to listen on a specific port
const server = app.listen({ port: PORT }, () => {
  console.log(`listening on port ${PORT}`);
  dbMigration.run();
});
