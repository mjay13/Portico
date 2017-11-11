// edit model to match sequelize
var db = require("../models/");

module.exports = function(app) {
	app.get("/keywords", function(request, result){
		result.render("#");
	});

};