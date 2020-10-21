const githubWebhook = (req, res) => {
  // Take necesary action...

  // Send a response message notifying the service sending
  // the webhook it was successfuly received, so the webhook
  // doesn't get sent again.
  res.send("Ok");
};

module.exports = githubWebhook;
