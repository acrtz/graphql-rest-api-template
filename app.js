const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const { apolloServer } = require("./graphql");
const webhooks = require("./webhooks");

// Initialize the express server
const app = express();

// Enable cross-origin resource sharing (CORS) requests for all routes
// This basically means you can make ajax requests to urls different from this api's
// For more information on CORS go to
// https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS
// to learn more about cors middleware go to
// https://github.com/expressjs/cors
app.use(cors());

// Parse incoming request body and expose it in req.body for all routes
// a good explanation of body-parser can be found here
// https://www.quora.com/What-exactly-does-body-parser-do-with-express-js-and-why-do-I-need-it
// to learn more about body parser go to
// https://github.com/expressjs/body-parser#readme
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect apolloServer to express app server.
// similar to app.use(), except it is happening inside of
// apolloServer.applyMiddleware. Look inside ./graphql/index
// to learn how apolloServer is initialized.
// To learn more about apollo middleware go to
// https://www.apollographql.com/docs/apollo-server/api/apollo-server/#applymiddleware
apolloServer.applyMiddleware({
  app,
  path: "/graphql", // defaults to '/graphql'
  bodyParserConfig: false, // set to false because is already done by bodyParser
});

// OPTIONAL
// Only needed if using ./webhooks from 3rd party services, like github, payment providers,
// email delivery platforms etc.
// Look in ./webhooks/index.js for more details
app.use("/webhooks", webhooks);

module.exports = app;
