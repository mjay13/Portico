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
	//console.log(dbartist);
});

db.artist.create({
	artist_reference_number: 104,
	name_last: "Lalone",
	name_first: "Michael",
	address_street: "112 Morgan Hill Road",
	address_city: "Murphy",
	address_state: "NC",
	address_zipcode: 28906,
	phone: '8288378149',
	payable_to: "Mike Lalone",
	consignment_percentage: 50,
	date_contract: "02-19-2011",
}).then(function(dbartist){
	//console.log(dbartist);
});

db.artist.create({
	artist_reference_number: 274,
	name_last: "Moreland",
	name_first: "Candyce",
	address_street: "3490 Rose Mallow Loop",
	address_city: "Oviedo",
	address_state: "FL",
	address_zipcode: 32766,
	phone: '4073667221',
	payable_to: "Candyce Moreland",
	consignment_percentage: 50,
	date_contract: "12-16-2015",
}).then(function(dbartist){
	//console.log(dbartist);
});

db.artist.create({
	artist_reference_number: 284,
	name_last: "Kim",
	name_first: "Sager",
	address_street: "1350 Common Way Road, #207",
	address_city: "Orlando",
	address_state: "FL",
	address_zipcode: 32814,
	phone: '9174078699',
	email: "thrownbyhand@gmail.com",
	payable_to: "Thrown By Hand, Inc.",
	consignment_percentage: 50,
	date_contract: "05-01-2016",
}).then(function(dbartist){
	console.log(dbartist);
});
