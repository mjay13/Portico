// edit model to match sequelize
var db = require("../models/");

module.exports = function(app) {
	app.get("/home", function(req, res){
	
		res.render("#");
	});

	// login, beginning on intial load
	app.get("/", function(req, res){
	
		res.redirect("/home");
	});

	// login specific
	app.get("/login", function(req, res){
	
		result.render("#");
	});


};