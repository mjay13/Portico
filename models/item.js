// item table information: creation & exportation
module.exports = function(sequelize, DataTypes) {
    // new item
    var item = sequelize.define("item", {
        // artist item is assigned to (linked  ex. 123)
        // artist_id_assignment: {
        //     associate: function(models) {
        //         item.belongsTo(models.artist, { foreignKey: 'reference_number' }); //targetKey: 'isoCode'
        //     },
        // },
        // ### number for item to assign with artist number (123-001)*
        reference_number: {
            // belongs to artist
            type: DataTypes.INTEGER,
            validate: {
                len: [3],
                not: ["[a-z]", 'i'],
                notNull: true
            }
        },
        // title*
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        // brief description (optional)
        description: {
            type: DataTypes.STRING
        },
        // // quantity* (0 accepted)
        quantity: {
            type: DataTypes.INTEGER,
            validate: {
                len: [3],
                not: ["[a-z]", 'i'],
                notNull: true
            }
        },
        // // retail price* 
        retail_price: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                not: ["[a-z]", 'i']
            }
        },
        // // default
        // //      active
        status: {
            // active: true
            type: DataTypes.BOOLEAN,
            defaultValue: true
        },
        // //      date last updated (timestamp)
        date_last_updated: {
            type: DataTypes.DATE
        }
    });

    // artist item is assigned to (linked  ex. 123)

    item.associate = function(models) {
        item.belongsTo(models.artist, { foreignKey: 'reference_number' }); //targetKey: 'isoCode'
    };

    return item;

};