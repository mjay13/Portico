var express = require("express");
var router = express.Router();
var db = require("../models");

// var express = require("express");
// var router = express.Router();
var db = require("../models");

module.exports = function(router) {
// get route -> index
router.get("/", function(req, res) {
  // send us to the next get function instead.
  res.redirect("/index");
});

// get route, edited to match sequelize
router.get("/catalog", function(req, res) {
  // replace old function with sequelize function
  db.item.findAll({
    // Here we specify we want to return our burgers in ordered by ascending burger_name
    order: [
      ["reference_number", "ASC"]
    ]
  })
  // use promise method to pass the burgers...
  .then(function(dbItem) {
    // into the main index, updating the page
    var hbsObject = {
      item: dbItem
    };
    return res.render("catalog", hbsObject);
  });
});
};