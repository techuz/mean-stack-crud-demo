var controller = require('../controllers/userController');
var validate = require('../validate/validation');

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Handles routing for the api
   ---------------------------------------------------- */
module.exports = function(app) {
	app.get('/api/users', controller.index);
	app.post('/api/users', validate.userCreate, controller.create);
	app.get('/api/user/:id', controller.view);
	app.put('/api/user/:id/update', validate.userUpdate, controller.update);
	app.delete('/api/user/:id', controller.delete);
}