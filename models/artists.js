module.exports = function(sequelize, DataTypes) {
    // new artist
    var artist = sequelize.define("artist", {

    // artist ### number (ex. 123) (maybe auto increments from last one created)
        reference_number : {
            // the has many for the items
            // (123)
        }, 
        // artist name
        name : {
            
        },
        // address(s)
        address : {

        },
        // phone(s)
        phone: {

        },
        // email(s)
        email: {

        },
        // website/social media contact(s)
        website_social_media : {

        },
        // name/business to write check to
        payable_to : {

        },
        // consignment percentage (default 50%)
        consignment_percentage : {

        },
        // date on contract
        date_contract : {

        },
        // default
        //      active
        status : {
          //defaultValue: active
        },
        date_last_updated : {

        },
        //      date created for db (default timestamp)
        // already in DB auto date_db_creation : {},

  });
    return item;
};