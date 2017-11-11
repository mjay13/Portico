// module.exports = function(sequelize, DataTypes) {
//     var Todo = sequelize.define("Todo", {
//         text: {
//             type: DataTypes.STRING,
//             // AllowNull is a flag that restricts a todo from being entered if it doesn't
//             // have a text value
//             allowNull: false,
//             // len is a validation that checks that our todo is between 1 and 140 characters
//             validate: {
//                 len: [1, 140]
//             }
//         },
//         complete: {
//             type: DataTypes.BOOLEAN,
//             // defaultValue is a flag that defaults a new todos complete value to false if
//             // it isn't supplied one
//             defaultValue: false
//         }
//     });
//     return Todo;
// };


// POST
module.exports = function(sequelize, DataTypes) {
    // new item
    var item = sequelize.define("item", {
        // artist item is assigned to (linked  ex. 123) (linked)*/RETRIEVED FROM DB
        artist_id_assignment : {

        },
        // ### number for item to assign with artist number (123-001)*
        reference_number : {

        }, // belongs to artist
        // title*
        title : {

        },
        // brief description (optional)
        description : {

        },
        // keywords (linked to attribute table?)
        keywords : {

        },
        // quantity* (0 accepted)
        // default 1
        quantity : {

        },
        // retail price* 
        retail_price : {

        },
        // arrival date 
        date_arrival : {
          // (default current date)
        },
        // default
        //      active
        status : {
          //defaultValue: active
        },
        //      date last updated (timestamp)
        date_last_updated : {

        },
        //      date created for db (default timestamp)
        // already in DB auto date_db_creation : {},
        // calculated
        //      total wholesale value of items (wholesale price x quantity)
        wholesale_total : {

        },
        //      wholesale price/artist consignment percentage 50%
        wholesale_individual : {

        },
        // location option? - dropdown of options, no created entries***
        location : {

        },
        // picture option?***
        image : {
          
        }
    });
    return item;
};




