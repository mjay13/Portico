var express = require("express");
var router = express.Router();
var db = require("../models");


module.exports = function(router) {

        // get all artists in ascending order
        router.get("/artist/ref-num/:id", function(req, res) {
                
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
            },


            // get all artists in ascending order
            router.get("/artist", function(req, res) {
                // replace old function with sequelize function
                db.artist.findAll({
                        // Here we specify we want to return our burgers in ordered by ascending burger_name
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
            })

            // end of export
        )};