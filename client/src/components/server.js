const express = require("express");
const app = express();
const { resolve } = require("path");
// This is your real test secret API key.
const stripe = require("stripe")("sk_test_2O1A0r0QA3pthnsvIfeshRj600l2xok1VL");
app.use(express.static("."));
app.use(express.json());

app.post("/create-payment-intent", async (req, res) => {
  const { amount } = req.body;
//   Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: parseFloat(amount),
    currency: "usd"
  });
  res.send({
    clientSecret: paymentIntent.client_secret
  });
});
app.listen(4242, () => console.log('Node server listening on port 4242!'));