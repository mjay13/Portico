var db = require("../models");


module.exports = function(app) {
    // get route -> index
    app.get("/", function(req, res) {
        // send us to the next get function instead.
        res.render("index");
    });

    // get for all items in ascending order
    app.get("/catalog", function(req, res) {

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
    app.get("/catalog/item/:itemref", function(req, res) {

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
    app.get("/catalog/item/by-artist/:artistref", function(req, res) {

        db.artist.findOne({
                where: {
                    artist_reference_number: req.params.artistref
                }
            })
            .then(function(dbArtist) {

                db.item.findAll({
                        where: {
                            artistId: dbArtist.id
                        }
                    })
                    .then(function(dbItem) {
                        var hbsObject = {
                            item: dbItem
                        };
                        return res.render("catalog", hbsObject);
                    });
            });
    });


    app.put("/item/update/:id", function(req, res) {
        db.item.update({
                // item_reference_number: "012",
                // artistId: 1,
                // title: "Three Palm Trees",
                // description: "5x7 inch framed painting",
                // quantity: 0,
                // retail_price: 80.00,
            })
            // pass the result of our call
            .then(function(dbItem) {
                // log the result to our terminal/bash window
                console.log(dbItem);

                // redirect
                res.redirect("catalog");
            });
    });

    // end of export
};