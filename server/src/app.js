const express = require('express');
const cors = require('cors');
const knex = require('./db/knex');
const PORT = process.env.PORT || 8081

const app = express();

app.use(express.json());
app.use(cors())

app.post('/create', (req, res) => {
    res.send({
        message: `Restaurant was created ${req.body.name}`
    })
})

app.listen(PORT, function() {
    console.log(`Creating magic on port ${PORT}`)
});