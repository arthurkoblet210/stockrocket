const User = require("../models/user");
const {
    verifyAccessToken,
    generateAccessToken
} = require("../src/jwt");
const isEmpty = require('is-empty');
const validator = require('validator');
const YOUR_DOMAIN = 'http://localhost:3000';


const buy = async (req, res) => {
    stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
    // console.log(process.env.STRIPE_SECRET_KEY);
    try {
        let amount = 10790;   
        const session = await stripe.checkout.sessions.create({
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: {
                        name: 'Upgrade StockRocket Plan',
                    },
                    unit_amount: amount,
                },
                quantity: 1,
            }, ],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success`,
            cancel_url: `${YOUR_DOMAIN}/selectmode`,
        });


        res.status(200).send(session.url);
    } catch (error) {
        console.error('Error confirming payment intent', error);
        res.status(500).send({
            success: false
        });
    }
}
module.exports = {
    buy
};