// edit model to match sequelize
var db = require("../models/");

// EXAMPLE SWITCH
// const App = ({ location, children }, { indexProps, fooProps, barProps }) => {
//     switch(location.pathname) {
//         case '/': return React.cloneElement(children, indexProps);
//         case '/foo': return React.cloneElement(children, fooProps);
//         case '/bar': return React.cloneElement(children, barProps);
//         default: return children;
//     }
// } 

module.exports = function(app) {
// GETS
	// homepage with search?
	app.get("/artists", function(req, res){
		//db.artists.findAll({
			// or search page
		//});

		result.render("#");
	});

	app.get("/artists/all", function(req, res){
		db.artists.findAll({

		});
		result.render("#");
	});

	app.get("/artists/:id", function(req, res){
		db.artists.findOne({

		});

		result.render("#");
	});

	// id range
	app.get("/artists/:id/range/:userinput", function(req, res){
		// db.artists.findAll({

		// });
		result.render("#");
	});

// PUTS

//POSTS




// end of exports
};