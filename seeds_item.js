var db = require("./models");

// BOELKE 1
db.item.create({
	item_reference_number: "001",
	artistId: 2,
	title: "Desk Art Painting",
	description: "3x3 inch acrylic painting with wood display easel",
	quantity: 5,
	retail_price: 30.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "003",
	artistId: 2,
	title: "Assorted Paitings",
	description: "5x7 inch framed acrylic painting",
	quantity: 4,
	retail_price: 80.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "012",
	artistId: 2,
	title: "Three Palm Trees",
	description: "5x7 inch framed acrylic painting",
	quantity: 0,
	retail_price: 80.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "013",
	artistId: 2,
	title: "Key West Lighthouse",
	description: "8x10 inch framed acrylic painting",
	quantity: 0,
	retail_price: 100.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "017",
	artistId: 2,
	title: "Note Card",
	description: "4x6 inch note card in a variety of prints",
	quantity: 24,
	retail_price: 30.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "023",
	artistId: 2,
	title: "Green Wave",
	description: "8x10 inch framed acrylic painting",
	quantity: 0,
	retail_price: 100.00,
}).then(function(dbitem){
	console.log(dbitem);
});


// SHARO 2

db.item.create({
	item_reference_number: "001",
	artistId: 1,
	title: "Turtle in Motion",
	description: "3x3 ft framed glass mosaic of green turtle",
	quantity: 0,
	retail_price: 650.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "005",
	artistId: 1,
	title: "Psycheldelic Fish",
	description: "2.5x2.5 ft glass mosaic of red fish in black frame",
	quantity: 0,
	retail_price: 900.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "003",
	artistId: 1,
	title: "Indonesian Puppet",
	description: "3x4 ft framed glass mosaic of white figure in profile in cool tones",
	quantity: 1,
	retail_price: 700.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "006",
	artistId: 1,
	title: "Oviedo Rooster",
	description: "3x4.5 black framed rooster in warm + earth tones",
	quantity: 1,
	retail_price: 950.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "007",
	artistId: 1,
	title: "Elenor",
	description: "3x3 ft oak framed glass mosaic of design with perpendicular lines and spheres",
	quantity: 1,
	retail_price: 550.00,

}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "009",
	artistId: 1,
	title: "Traffic",
	description: "3x4 ft black framed glass mosaic of fish school in profile",
	quantity: 1,
	retail_price: 1250.00,
}).then(function(dbitem){
	console.log(dbitem);
});


// LALONE 3
db.item.create({
	item_reference_number: "001",
	artistId: 3,
	title: "Petal Dish",
	description: "White cermaic 4in diameter dish with decorative purple and red spots resembling petals",
	quantity: 6,
	retail_price: 20.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "002",
	artistId: 3,
	title: "Dinner Plate",
	description: "Tan cermaic 10in diameter dish with green accents",
	quantity: 5,
	retail_price: 45.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "004",
	artistId: 3,
	title: "Petal Dish",
	description: "Ceramic 3-5in tall small-fulted bud vase in various colors of teal, blue, and earth tones with black accents",
	quantity: 21,
	retail_price: 18.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "006",
	artistId: 3,
	title: "Lidded Ash Vase",
	description: "Tan ceramic 2ft tall vase in an ash glaze with custom lid",
	quantity: 1,
	retail_price: 200.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "007",
	artistId: 3,
	title: "Ash Mug",
	description: "Ceramic mug with wide base and small mouth in tones of teal, blue, green, and tan with the ash glaze technique",
	quantity: 13,
	retail_price: 25.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "010",
	artistId: 3,
	title: "Ash Bowl",
	description: "Tan ceramic bowl with accents of blue and green done with the ash glaze technique",
	quantity: 2,
	retail_price: 45.00,
}).then(function(dbitem){
	console.log(dbitem);
});

// MORELAND 4

db.item.create({
	item_reference_number: "003",
	artistId: 4,
	title: "Christmas Tree Bronze Earrings",
	description: "Pair of bronze PMC molded earrings",
	quantity: 0,
	retail_price: 18.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "016",
	artistId: 4,
	title: "Sunburst Earrings",
	description: "Pair of bronze PMC and copper molded earrings in a circular sunburst design",
	quantity: 1,
	retail_price: 20.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "036",
	artistId: 4,
	title: "Vanilla Candle",
	description: "Small soy EOs scented candle in ceramic bowl which can be re-used once the candle is burned out",
	quantity: 3,
	retail_price: 5.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "039",
	artistId: 4,
	title: "Bayberry Candle",
	description: "Large soy EOs scented candle in ceramic bowl which can be re-used once the candle is burned out",
	quantity: 2,
	retail_price: 15.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "043",
	artistId: 4,
	title: "Cinnamon Candle",
	description: "Large soy EOs scented candle in ceramic bowl which can be re-used once the candle is burned out",
	quantity: 1,
	retail_price: 15.00,
}).then(function(dbitem){
	console.log(dbitem);
});

// SAGER 5

db.item.create({
	item_reference_number: "001",
	artistId: 5,
	title: "Mini Bowl with Crystal",
	description: "Mini ceramic bowl 1-2in diameter with assorted crystal included, in various glazes",
	quantity: 4,
	retail_price: 18.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "006",
	artistId: 5,
	title: "Chip and Dip Set",
	description: "Ceramic matching plate and bowl set from the Playlinda series",
	quantity: 1,
	retail_price: 30.00,
}).then(function(dbitem){
	console.log(dbitem);
});

db.item.create({
	item_reference_number: "015",
	artistId: 5,
	title: "Mini Bowl",
	description: "Mini ceramic bowl 1-2in diameter, in various glazes",
	quantity: 4,
	retail_price: 18.00,
}).then(function(dbitem){
	console.log(dbitem);
});
