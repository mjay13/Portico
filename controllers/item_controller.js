var express = require("express");
var router = express.Router();
var db = require("../models");


module.exports = function(router) {
    // get route -> index
    router.get("/", function(req, res) {
        // send us to the next get function instead.
        res.render("index");
    });

    // get for all items in ascending order
    router.get("/catalog", function(req, res) {

        db.item.findAll({

                order: [
                    ["item_reference_number", "ASC"]
                ]
            })

            .then(function(dbItem) {

                var hbsObject = {
                    item: dbItem
                };
                return res.render("catalog", hbsObject);
            });
    });

    // get for item by reference number (not including the artist ref num)
    router.get("/catalog/item/:itemref", function(req, res) {

        db.item.findAll({
                where: {
                	item_reference_number: req.params.itemref
                }
            })

            .then(function(dbItem) {

                var hbsObject = {
                    item: dbItem
                };
                return res.render("catalog", hbsObject);
            });
    });
    // get all items with the same artist
    // needs work
    router.get("/catalog/artistitems/:artistref", function(req, res) {

        db.item.findAll({
                // with a foriegn key for the artist
                // make into a variable
                // artistId
                // go into the artist table and find the matching artist_reference_number with the :artistref

            })
            .then(function(dbItem) {
                // pass the variable, and look for the artist_reference_number that equals the req.params.artistref
                // where: {
                //     artist_reference_number: req.params.artistref
                // }


                var hbsObject = {
                    item: dbItem
                };
                return res.render("catalog", hbsObject);
            });
    });

    // end of export
};