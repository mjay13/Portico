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

    // date updated or date create (where), (for) year, year + month, year + month + day
    app.get("/api/artists/date/:date/:specifics", function(req, res) {
        

        // db.artist.findAll({

        // });
        res.render("#");
    });

    // artist zipcode or state
    app.get("/api/artists/address/:option", function(req, res) {
        // swich zipcode or state

        db.artist.findAll({

        });
        res.render("#");
    });

    // id range
    app.get("/api/artists/id/range/:range", function(req, res) {
        // req.params.range
        // db.artist.findAll({

        // });
        res.render("#");
    });

    // by last name starts with
	app.get("/api/artists/name/lastnameletterof/:letter", function(req, res){
		// // req.params.letter
		// db.artist.findAll({

		// });
		res.render("#");
	});

    // by last name
	app.get("/api/artists/name/:artistname", function(req, res){
		// req.params.artistname
		db.artist.findOne({

		});
		res.render("#");
	});


	// by consignment percentage
	app.get("/api/artists/consignment/:percentage", function(req, res) {
        // req.params.:percentage
        db.artist.findAll({

        });

        res.render("#");
    });

	// by artist id
    app.get("/api/artists/id/:id", function(req, res) {
        // req.params.id
        db.artist.findOne({

        });

        res.render("#");
    });

    // by primary key
    app.get("/api/artists/primarykey/:primarykey", function(req, res) {
       // req.params.primarykey
        db.artist.findOne({

        });

        res.render("#");
    });

    // all total items in a number form
    app.get("/api/artists/items", function(req, res) {
 
        db.artist.findAll({

        });
        res.render("#");
    });

    // all artists active or inactive
    app.get("/api/artists/status/:status", function(req, res) {
    	// active or inactive switch
        db.artist.findAll({

        });
        res.render("#");
    });

    // all artists ordered numerically
	app.get("/artists/ordered/num/:order", function(req, res){
		// numerically ascending
		// numerically descending
	});

	// all artists alphabetically
	app.get("/api/artists/ordered/alph/:order", function(req, res){
		// alphabetically ascending
		// alphabetically descending
	});

    // artist homepage
    app.get("/api/artists", function(req, res) {
        //db.artists.findAll({
        // or search page
        //});
        res.render("#");
    });


 // POSTS


 // PUTS




    // end of exports
};