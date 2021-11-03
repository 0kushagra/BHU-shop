const functions = require("firebase-functions");

const express = require('express');
const cors = require('cors');
const { response, request } = require("express");
const stripe = require('stripe')('sk_test_51JIVhFSI7OnnYCEtf2vJrKY4ZF0iuHGBgC4PKHxhjnPyytbvzuqkQiFrvxLHHYI4Qvvkk51pvxmVZG9ICIWQj1kp00qp233GgU');

//API

// - App config
const app =  express();

// - Middkewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/',(request, response) => response.status(200).send('hello world'))
app.post('/payments/create' , async (request,response) =>{

    const total = request.query.total;

    console.log('Payemnet Request Recieved!!! for the amount >>>>>', total)

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})
// - Listen command
express.api = functions.https.onRequest(app)