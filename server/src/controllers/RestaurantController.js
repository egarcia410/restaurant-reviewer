const knex = require('../db/knex');

module.exports = {

    create(req, res) {
        let name = req.body.name;
        let address = req.body.address;
        let category = req.body.category;

        knex('restaurants').insert({ name: name, address: address, category: category })
            .then((result) => {
                console.log(result)
                res.send({
                    message: "Restaurant has been added!"}
                );
            })
            .catch((error) => {
                console.log(error)
                res.send({
                    message: "Unable to add restaurant!"}
                );
            })
    }
}