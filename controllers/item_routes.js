		// edit model to match sequelize
		var db = require("../models/");

		module.exports = function(app) {
		// all 
			// items
			
			// with ___ in the title
			app.get("/api/items/title/:titleincludes", function(req, res){
				db.item.findAll({

				});
				res.render("#");
			});
			// range ### through ###
			app.get("/api/items/range/:range", function(req, res){
				db.item.findAll({

				});
				res.render("#");
			});
			// by keyword ___ (singular) or ___ + ___ (optional adding keywords?)

			// later, not sure about doing keywords now

			// active (by default)
			// inactive
			app.get("/api/items/status/:status", function(req, res){
				// Swtich active or inactive
				db.item.findAll({

				});
				res.render("#");
			});
			
			// date updated (only year, month, day)
				// ascending
				// descending
			// date arrival
				// by year ___
				// by year + month ___ + ___
				// year + month + day ___ + ___
			// date created (only year, month, day)
				// ascending
				// descending
			// date updated, date created, arrval (where), (for) year, year + month, year + month + day
		    app.get("/api/items/date/:date/:specifics", function(req, res) {
		        // db.item.findAll({

		        // });
		        res.render("#");
		    });
			// price options
			app.get("/api/items/price/:options", function(req, res){
				// switch high to low, low to high
				// specific price of ___
				// range of ___
				// below ___
				// above ___
				db.item.findAll({

				});
				res.render("#");
			});
			
			app.get("/api/artists/quantity/:quantity", function(req, res) {
		        // req.params.:quantity
		        // of ___
				// range of ___ through ___
				// consignment percentage 
				// of ___
				// over 50%
				// all ascending
				// all descending
		        db.item.findAll({

		        });

		        res.render("#");
		    });
			// by primary key (Database reference key)
			app.get("/api/items/primarykey/:key", function(req, res){
				db.item.findOne({

				});
				res.render("#");
			});
		 
			// by ### with same artist
			app.get("/api/items/artist/:artist", function(req, res){
				// switch artist name
				// artist ### id
				db.item.findAll({

				});
				res.render("#");
			});

			// all items ordered numerically
			app.get("/api/items/ordered/num/:order", function(req, res){
				// numerically ascending
				// numerically descending
			});

			// all items alphabetically
			app.get("/api/items/ordered/alph/:order", function(req, res){
				// alphabetically ascending
				// alphabetically descending
			});

			// one item 
			app.get("/api/items/id/:fullid", function(req, res){
				db.item.findOne({

				});
				res.render("#");
			});
			
			// all items
			app.get("/api/items", function(req, res){
				// default order by artist low-high, then number low-high
				db.item.findAll({

				});
				res.render("#");
			});

		// end of export
		};