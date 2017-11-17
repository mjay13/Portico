var db = require("../models");


module.exports = function(app) {

    // get one artist via reference number
    app.get("/artist/ref-num/:id", function(req, res) {

        db.artist.findAll({
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
                // artist_reference_number: req.body.artistId,
                // name_first: req.body.nameFirst,
                // name_last: req.body.nameLast,
                // address_street: req.body.streetAddress,
                // address_city: req.body.inputCity,
                // address_state: req.body.state,
                // address_zipcode: req.body.inputZip,
                // phone: req.body.inputPhone,
                // payable_to: req.body.payableTo,
                // consignment_percentage: req.body.consignmentPercent,
                // date_contract: req.body.dateContract
                
            })
            // pass the result of our call
            .then(function(dbArtist) {
                // log the result to our terminal/bash window
                console.log(dbArtist);
                // redirect
                res.redirect("/artist");
            });
    });

    // updates an existing artist maybe update/:id
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
                // consignment_percentage: req.body.percentage
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

    // get all artists in ascending order on load of main artist page
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

    // // load page
    // app.get("/artist", function(req, res) {     
    //        return res.render("artist");
    // });

    // end of export
};