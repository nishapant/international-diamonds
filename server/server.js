const express = require("express");
const app = express();
require('dotenv').config();
const { resolve } = require("path");

const stripe = require("stripe")(process.env.API_KEY);
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