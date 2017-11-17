var db = require("../models");


module.exports = function(app) {

    // get one artist via reference number
    app.get("/artist/ref-num/:id", function(req, res) {

        if (req.params.id) {

            db.artist.findOne({
                where: {
                    artist_reference_number: req.params.id
                }
            }).then(function(ref_num) {
                //return res.json(result);
                var hbsObject = {
                    artist: ref_num
                };
                return res.render("artist", hbsObject);
            });
        }

        // Otherwise...
        else {
            // error message instead?
            artist.findAll({

                })
                .then(function(result) {
                    return res.json(result);
                });
        }
    });
    // get all artists with consignment percentage of the param
    app.get("/artist/percentage/:percentage", function(req, res) {
        db.artist.findAll({
        		
                where: {
                    consignment_percentage: req.params.percentage
                },
            
                order: [
                    ["artist_reference_number", "ASC"]
                ]
            })
            // use promise method to pass the burgers...
            .then(function(dbArtist) {
                // into the main index, updating the page
                var hbsObject = {
                    artist: dbArtist
                };
                return res.render("artist", hbsObject);
            });
    });


    // creates a new artist
    app.post("/artist/create", function(req, res) {
        db.artist.create({
                // artist_reference_number: 391,
                // name_last: req.body.name_last
                // name_first: req.body.name_first,
                // address_street: req.body.address_street,
                // address_city: req.body.address_city,
                // address_state: req.body.address_state,
                // address_zipcode: req.body.address_zipcode,
                // phone: req.body.phone,
                // payable_to: req.body.payable_to,
                // consignment_percentage: req.body.percentage,
                // date_contract: req.body.date_contract,
            })
            // pass the result of our call
            .then(function(dbArtist) {
                // log the result to our terminal/bash window
                console.log(dbArtist);
                // redirect
                res.redirect("/artist");
            });
    });
    // updates an existing artist
    app.put("/artist/update", function(req, res) {
        db.artist.update({
                // name_last: req.body.name_last
                // name_first: req.body.name_first,
                // address_street: req.body.address_street,
                // address_city: req.body.address_city,
                // address_state: req.body.address_state,
                // address_zipcode: req.body.address_zipcode,
                // phone: req.body.phone,
                // payable_to: req.body.payable_to,
                // consignment_percentage: req.body.percentage,
                // date_contract: req.body.date_contract,
            }, {
                where: {
                    artist_ref: req.body.artist_ref
                }
            })
            // pass the result of our call
            .then(function(dbArtist) {
                // log the result to our terminal/bash window
                console.log(dbArtist);
                // redirect
                res.redirect("/artist");
            });
    });


    // get all artists in ascending order
    app.get("/artist", function(req, res) {
        db.artist.findAll({
                order: [
                    ["artist_reference_number", "ASC"]
                ]
            })
            .then(function(dbArtist) {

                var hbsObject = {
                    artist: dbArtist
                };
                return res.render("artist", hbsObject);
            });
    });

    // end of export

};