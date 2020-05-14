'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
      async create(ctx) {
        const { items, email, amount, phoneNumber, country, postalCode, state, city, address, name } = ctx.request.body;

            // Send charge to Stripe
            // const charge = await stripe.charges.create({
            //   amount: amount * 100,
            //   currency: 'usd',
            //   description: `Order ${new Date(Date.now())} - User ${ctx.state.user.id}`,
            //   source: token
            // });
      
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
