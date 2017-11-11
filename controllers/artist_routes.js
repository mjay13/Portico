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
    app.get("/artists/:date/:specifics", function(req, res) {
        

        // db.artists.findAll({

        // });
        result.render("#");
    });

    // artist zipcode or state
    app.get("/artists/address/:option", function(req, res) {
        // swich zipcode or state

        // db.artists.findAll({

        // });
        result.render("#");
    });

    // id range
    app.get("/artists/id/:range", function(req, res) {
        // req.params.range
        // db.artists.findAll({

        // });
        result.render("#");
    });

    // by last name starts with
	app.get("/artists/name/lastnameletterof/:letter", function(req, res){
		// // req.params.letter
		// db.artists.findAll({

		// });
		result.render("#");
	});

    // by last name
	app.get("/artists/name/:artistname", function(req, res){
		// req.params.artistname
		// db.artists.findOne({

		// });
		result.render("#");
	});

	// by artist id
    app.get("/artists/:id", function(req, res) {
        // req.params.id
        db.artists.findOne({

        });

        result.render("#");
    });

    // by primary key
    app.get("/artists/:primarykey", function(req, res) {
       // req.params.primarykey
        // db.artists.findOne({

        // });

        result.render("#");
    });

    // all artists
    app.get("/artists/all", function(req, res) {
        db.artists.findAll({

        });
        result.render("#");
    });

    // artist homepage
    app.get("/artists", function(req, res) {
        //db.artists.findAll({
        // or search page
        //});

        result.render("#");
    });



    // PUTS

    //POSTS




    // end of exports
};