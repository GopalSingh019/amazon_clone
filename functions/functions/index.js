const functions = require("firebase-functions");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require('express');
const cors = require('cors');
const app = express();
const stripe = require('stripe')('sk_test_51MZVocSDW6rpkpt9kw7ioajBEKwNGGf09ysfCLZyKmKKvEFmgBjjEWH6NnR2fpVdh69fIeTq6LFGyilIugiaYxXD00qjtC5SCG')

app.use(cors({ origin: true }));

app.use(express.json());

app.post('/payment/create', async (req, res) => {

    const amount=req.query.total;
    const name=req.query.name;
    // const address=req.body.address
    // console.log('thi si test',address);

    const paymentIntent= await stripe.paymentIntents.create({
        amount:amount,
        currency:'usd',
        description:'amazon clone services',
        shipping: {
            name: name,
            address: {
              line1: '510 Townsend St',
              postal_code: '98140',
              city: 'San Francisco',
              state: 'CA',
              country: 'US',
            },
          }
    })

    res.status(201).json({clientSecret:paymentIntent.client_secret});
})

exports.api = functions.https.onRequest(app);

//http://127.0.0.1:5001/ecomm-4068f/us-central1/api