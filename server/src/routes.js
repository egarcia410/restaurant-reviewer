const RestaurantController = require('./controllers/RestaurantController');

module.exports = (app) => {

    // Create a restaurant
    app.post('/create', RestaurantController.create);
    
}