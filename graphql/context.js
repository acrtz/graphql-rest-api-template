// This module is optional and should only be used if there
// is common information or functionality required by most
// or all of the resolvers. There are a variety of reasons
// to use context but one of the more common ones is for
// authorization.
const context = async ({ req, res }) => {
  // get a token sent in the request headers. This could just
  // as well be done with cookies.
  const { Authorization } = req.headers;

  // some functionality that uses the Authorization token to get
  // the user and their permisions if needed
  const user = { id: "5", name: "Armand" };

  // Now user information will be available in the context paramater
  // of all the resolver functions. If most resolver functions
  // don't need this information then it is better to not use
  // context and just impletement this functionality for the specific
  // functions that need it.
  return { user };
};

module.exports = context;
