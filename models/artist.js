// artist table information: creation & exportation
module.exports = function(sequelize, DataTypes) {
    // new artist
    var artist = sequelize.define("artist", {
        // artist ### number (ex. 123) (maybe auto increments from last one created)
        reference_number: {
            // the has many for the items
            // (123)
            type: DataTypes.INTEGER(3),
            validate: {
                len: [3],
                not: ["[a-z]", 'i'],
                notNull: true,
            }
        },
        // items belonging to the artist
        items: {
            associate: function(models) {
                artist.hasMany(item, { foreignKey: 'reference_number', sourceKey: 'isoCode' });
            }
        },
        // artist last name
        name_last: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$",'i'],
                notNull: true,
            }
        },
        // artist first name
        name_first: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$",'i'],
                notNull: true,
            }
        },
        // street address
        address_street: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // city
        address_city: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$",'i'],
                notNull: true,
            }
        },
        // state
        address_state: {
            type: DataTypes.STRING,
            validate: {
                is: ["^[a-z]+$",'i'],
                len: [2],
                notNull: true,
            },
        },
        // zipcode
        address_zipcode: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i'],
                notNull: true,
            }
        },
        // phone
        phone: {
            type: DataTypes.INTEGER,
            validate: {
                not: ["[a-z]", 'i'],
                notNull: true,
            }
        },
        // email
        email: {
            type: DataTypes.STRING,
            validate: {
                isEmail: true,
                notNull: true,
            }
        },
        // website/social media
        website_social_media: {
            allowNull: true,
            validate: {
                isUrl: true,
            }
        },
        // name/business to write check to
        payable_to: {
            type: DataTypes.STRING,
            allowNull: false,
            // defaultValue: {
            //     // SELECT CONCAT(field1, field2, field3) FROM table1
            //     //attributes: [models.sequelize.literal("name_first || ' ' || name_last"), 'payable_to']

            //     where: artist.where(artist.fn("concat", artist.col("name_first"), artist.col("name_last")), {
            //         like: '%John Do%'
            //     })
            // }
        },
        // consignment percentage (default 50%)
        consignment_percentage: {
            type: DataTypes.INTEGER,
            defaultValue: (50),
            validate: {
                not: ["[a-z]", 'i'],
            }
        },
        // date on contract
        date_contract: {
            type: DataTypes.DATEONLY
        },
        // status active/inactive
        status: {
            //defaultValue: active
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        date_last_updated: {
            type: DataTypes.DATE
        }
    // end of artist
    });
    return artist;
   // end of export 
};