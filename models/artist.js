// artist table information: creation & exportation
module.exports = function(sequelize, DataTypes) {
    // new artist
    var artist = sequelize.define("artist", {
        // artist ### number (ex. 123) (maybe auto increments from last one created)
        artist_reference_number: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i'],
                //len: [3],
            }
        },
        // artist last name
        name_last: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$", 'i'],
            }
        },
        // // artist first name
        name_first: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$", 'i'],
               
            }
        },
        // // street address
        address_street: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // // city
        address_city: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$", 'i'],
                
            }
        },
        // // state
        address_state: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$", 'i'],
                len: [2],
            
            }
        },
        // // zipcode
        address_zipcode: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i'],
                
            }
        },
        // // phone
        phone: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i'],
                // len: [10]
               
            }
        },
        // // email
        email: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isEmail: true,
                
            }
        },
        // // website/social media
        website_social_media: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isUrl: true,
               
            }
        },
        // // name/business to write check to
        payable_to: {
            type: DataTypes.STRING,
        },
        // // consignment percentage (default 50%)
        consignment_percentage: {
            type: DataTypes.INTEGER,
            defaultValue: (50),
            validate: {
                not: ["[a-z]", 'i']
            }
        },
        // // date on contract
        date_contract: {
            type: DataTypes.DATEONLY
        },
        // // status active/inactive
        status: {
            //defaultValue: active
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // date_last_updated: {
        //     type: DataTypes.DATE,
        // }
        // end of artist
    });

    artist.associate = function(models) {
        artist.hasMany(models.item);
    };
    return artist;
    // end of export 
};