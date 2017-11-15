var db = require("./models");

db.item.create({
	item_reference_number: 1,
	artistId: 1,
	title: "Desk Art Painting",
	description: "3x3 inch painting with wood display easel",
	quantity: 5,
	retail_price: 30.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: 12,
	artistId: 1,
	title: "Three Palm Trees",
	description: "5x7 inch framed painting",
	quantity: 0,
	retail_price: 80.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: 3,
	artistId: 2,
	title: "Indonesian Puppet",
	description: "3x4 ft framed glass mosaic of white figure in profile",
	quantity: 1,
	retail_price: 700.00,

}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: 9,
	artistId: 2,
	title: "Traffic",
	description: "3x4 ft framed glass mosaic of multiple fish",
	quantity: 1,
	retail_price: 1250.00,
}).then(function(dbitem){
	console.log(dbitem);
});