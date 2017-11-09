var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var A_routes = require("./artist_routes.js");
var I_routes = require("./item_routes.js");
var K_routes = require("./keyword_routes.js");

app.use("/", routes);

app.listen(port);