var express = require("express");
var bodyParser = require("body-parser");
//var router = express.Router();

var app = express();
var port = process.env.PORT || 3000;

db = require("./models");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("./public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({type: "application/vdn.api+json"}));


// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



// Import routes and give the server access to them.
//require("./controllers/artist_routes.js")(app);
//require("./controllers/item_routes.js")(app);



// Listen on port 3000.
db.sequelize.sync({force: true}).then(function() {
  require("./seeds_artist.js");
  require("./seeds_item.js");

  app.listen(port, function (err, restults){
  	if (err) throw err;
  	console.log("Express on :3000 is a go!");
  });
});

