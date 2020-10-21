const router = require("express").Router();
const github = require("./github");

// There are a lot of different reasons for needing to use webhooks
// Github might need to notify you about some deployment event, a
// payment provider like Stripe might need to notify you that an
// asynchronous payment succeeded or failed, or an email service
// platform like sendgrid might send you data on email deliveries.
// To learn more about webhooks and their usage you can look at the
// following links to the afforementioned services.
// (I am not endorsing or recomending any of these services, the just
// happen to be ones I am familiar with)
// https://docs.github.com/en/free-pro-team@latest/developers/webhooks-and-events/about-webhooks
// https://stripe.com/docs/webhooks
// https://sendgrid.com/docs/for-developers/tracking-events/getting-started-event-webhook/
router.use("/github", github);

module.exports = router;
