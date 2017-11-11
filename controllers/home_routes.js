// edit model to match sequelize
var db = require("../models/");

module.exports = function(app) {
	app.get("/home", function(req, res){
	
		result.render("#");
	});

	// login, beginning on intial load
	app.get("/login", function(req, res){
	
		result.render("index");
	});

	// login specific
	app.get("/login", function(req, res){
	
		result.render("index");
	});


};