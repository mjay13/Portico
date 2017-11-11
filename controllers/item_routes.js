// edit model to match sequelize
var db = require("../models/");

module.exports = function(app) {
// all 
	// items
	// with the same artist
	app.get("/items/:artist", function(req, res){
		db.items.findAll({

		});
		result.render("#");
	});
	// with ___ in the title
	app.get("/items/:titleincludes", function(req, res){
		db.items.findAll({

		});
		result.render("#");
	});
	// range ### through ###
	app.get("/items/:range", function(req, res){
		db.items.findAll({

		});
		result.render("#");
	});
	// by keyword ___ (singular) or ___ + ___ (optional adding keywords?)

	// later, not sure about doing keywords now

	// active (by default)
	// inactive
	app.get("/items/:status", function(req, res){
		// Swtich active or inactive
		db.items.findAll({

		});
		result.render("#");
	});
	
	// date updated (only year, month, day)
	// ascending
	// descending
	// date
	// by year ___
	// by year + month ___ + ___
	// year + month + day ___ + ___
	// date created (only year, month, day)
	// ascending
	// descending
	// date
	// by year ___
	// by year + month ___ + ___
	// year + month + day ___ + ___
	// price
	// specific price of ___
	// range of ___
	// below ___
	// above ___
	// quantity
	// of ___
	// range of ___ through ___
	// consignment percentage 
	// of ___
	// over 50%
	// all ascending
	// all descending
	// one item 
	// by ###
	// by primary key (Database reference key)
	// ordered (for different kinds of queries, possibly used to order the returns from all option?)
	// numerically ascending
	// numerically descending
	// by consignment percentage
	// ascending
	// descending
	// all items
	app.get("/items", function(req, res){
		db.items.findAll({

		});
		result.render("#");
	});

};