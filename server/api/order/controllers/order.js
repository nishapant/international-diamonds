'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const stripe = require('stripe')('sk_test_2O1A0r0QA3pthnsvIfeshRj600l2xok1VL');


module.exports = {
      async create(ctx) {
        const { items, email, amount, phoneNumber, country, postalCode, state, city, address, name } = ctx.request.body;
   

        const paymentIntent = await stripe.paymentIntents.create({
            amount: amount * 100,
            currency: "usd"
          });

        let order;
        order = await strapi.api.order.services.order.create({
            name,
            address,
            city,
            state,
            postalCode,
            country,
            email,
            phoneNumber,
            amount,
            email,
            items
        });
        return order;
      }
};
