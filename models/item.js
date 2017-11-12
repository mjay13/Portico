// item table information: creation & exportation
module.exports = function(sequelize, DataTypes) {
    // new item
    var item = sequelize.define("item", {
        // artist item is assigned to (linked  ex. 123)
        artist_id_assignment: {
            associate: function(models) {
                item.belongsTo(artist, { foreignKey: 'reference_number', targetKey: 'isoCode' });
            },
            // validate: {
            //     len: [3],
            //     not: ["[a-z]", 'i'],
            // }
        },
        // ### number for item to assign with artist number (123-001)*
        reference_number: {
            // belongs to artist
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                len: [3],
                not: ["[a-z]", 'i'],
            }
        },
        // title*
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // brief description (optional)
        description: {
            type: DataTypes.STRING,
        },
        // quantity* (0 accepted)
        quantity: {
            type: DataTypes.INTEGER(3),
            allowNull: false
        },
        // retail price* 
        retail_price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                not: ["[a-z]", 'i'],
            }
        },
        // default
        //      active
        status: {
            // active: true
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        //      date last updated (timestamp)
        date_last_updated: {
            type: DataTypes.DATE
        }
    });
    return item;
};
//      date created for db (default timestamp)
// already in DB auto date_db_creation : {},
// arrival date 
// date_arrival: {
//     // (default current date)
//     type: DataTypes.DATEONLY
// },
// calculated
//      total wholesale value of items (wholesale price x quantity)
// wholesale_total: {
//     // wholesale individual * quantity
//     type: DataTypes.INTEGER,
//     validate: {
//         not: ["[a-z]", 'i'],
//     }

// },
//   wholesale individual
// wholesale_individual: {
//     // retail price/artist consignment percentage consignment_percentage
//     // (retail_price / 100) * (artist.consignment_percentage)

// },
// keywords (linked to attribute table?)
// keywords : {
// JSON
// ARRAY
// },
// // location option? - dropdown of options, no created entries***
// location: {

// },
// // picture option?***
// image: {

// }