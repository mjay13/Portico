// edit model to match sequelize
var db = require("../models/");

module.exports = function(app) {
	app.get("/", function(req, res){
		db.items.findAll({

		});
		result.render("index");
	});

};