var db = require("./models");

db.artist.create({
	artist_reference_number: 391,
	name_last: "Rush",
	name_first: "Rosario",
	address_street: "1340 Periwinkle Blue Way",
	address_city: "Oviedo",
	address_state: "FL",
	address_zipcode: 32766,
	phone: '4074216210',
	payable_to: "Rosario Rush",
	consignment_percentage: 75,
	date_contract: "02-19-2011",
}).then(function(dbartist){
	console.log(dbartist);
});

db.artist.create({
	artist_reference_number: 120,
	name_last: "Boelke",
	name_first: "Michael",
	address_street: "2100 Florawood Court",
	address_city: "Oviedo",
	address_state: "FL",
	address_zipcode: 32765,
	phone: '4079771692',
	payable_to: "Michael Boelke",
	consignment_percentage: 50,
	date_contract: "11-30-2012",
}).then(function(dbartist){
	console.log(dbartist);
});