var mongoose = require('mongoose');
var User = require('../models/user'); //created model loading here

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = List users
   ---------------------------------------------------- */
exports.index = function(req, res) {
	User.find({}, function(error, users) {
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, result: users, count: users.length});
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Register new user
   ---------------------------------------------------- */
exports.create = function(req, res) {
	var user = new User(req.body);
	user.save(function(error) {
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1,  message: "User created successfully..."});
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Single user view
   ---------------------------------------------------- */
exports.view = function(req, res) {
	User.findById(req.params.id, function(error, user) {
		if(error) {
			return res.json({status: 0, message: error});
		}
		res.json({status: 1, result: user});
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Update user
   ---------------------------------------------------- */
exports.update = function(req, res) {
	User.findOneAndUpdate({'_id': req.body.id}, req.body, {new: true}, function(error, user){
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, message: "User updated successfully..."});
	});
};

/* = Author: Parag Khalas, Update Date: 05-10-2017
   = Delete user
   ---------------------------------------------------- */
exports.delete = function(req, res) {
	User.remove({'_id': req.params.id}, function(error, user){
		if(error) {
			return res.json({status: 0, message: "Something went wrong", result: error});
		}
		res.json({status: 1, message: "User deleted successfully..."});
	});
};