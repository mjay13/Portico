var db = require("./models");

db.item.create({
	item_reference_number: "001",
	artistId: 2,
	title: "Desk Art Painting",
	description: "3x3 inch painting with wood display easel",
	quantity: 5,
	retail_price: 30.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "012",
	artistId: 2,
	title: "Three Palm Trees",
	description: "5x7 inch framed painting",
	quantity: 0,
	retail_price: 80.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "003",
	artistId: 1,
	title: "Indonesian Puppet",
	description: "3x4 ft framed glass mosaic of white figure in profile",
	quantity: 1,
	retail_price: 700.00,

}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "009",
	artistId: 1,
	title: "Traffic",
	description: "3x4 ft framed glass mosaic of multiple fish",
	quantity: 1,
	retail_price: 1250.00,
}).then(function(dbitem){
	console.log(dbitem);
});