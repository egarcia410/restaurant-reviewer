const knex = require('./db/knex');

module.exports = (app) => {

    app.post('/create', (req, res) => {
        let name = req.body.name;
        let address = req.body.address;
        let category = req.body.category;

        knex('restaurants').insert({name: name, address: address, category: category})
            .then((result) => {
                console.log(result)
                return "Restaurant has been added!"
            })
            .catch((error) => {
                console.log(error)
                return "Unable to add restaurant!"
            })
        // res.send({
        //     message: `Restaurant was created ${req.body.name}`
        // })
    })  
}