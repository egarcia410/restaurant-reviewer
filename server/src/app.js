const express = require('express');
const knex = require('./db/knex');

const app = express();

app.get('/status', (req, res) => {
    res.send({
        message: 'Hello'
    })
})

app.listen(process.env.port || 8081)