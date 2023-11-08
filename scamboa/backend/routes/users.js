var express = require("express");
var router = express.Router();

// DB
const Personne = require("../models/personnes");

// get from db
router.get("/db", (req, res, next) => {
	Personne.find().then((data) => {
		res.json({ allUsersDb: data });
		// console.log(data);
	});
});

// get one
router.get("/db/:id", (req, res, next) => {
	Personne.find().then((data) => {
		// console.log(data[1]);
		const personneId = req.params.id;
		res.json({ allUsersDb: data[personneId] });
	});
});

// add
router.post("/db/adduser", (req, res, next) => {
	// method 1
	const newPersonne = new Personne({
		nom: req.body.nom,
		prenom: req.body.prenom,
		age: req.body.age,
		email: req.body.email,
		adresse: {
			rue: req.body.rue,
			ville: req.body.ville,
			code_postal: req.body.code_postal,
			pays: req.body.pays,
		},
		interets: [req.body.interets],
		date_inscription: new Date(),
	});
	newPersonne.save().then((newDoc) => {
		console.log(newDoc);
	});
	res.json({ newUserDb: newPersonne });

	// method 2
	// const newPersonne = new Personne({
	// 	date_inscription: new Date(),
	// });
	// newPersonne.save().then((newDoc) => {
	// 	console.log(newDoc);
	// });
	// res.json({ newUserDb: newPersonne });
});

// update
router.put("/db/update/:position", (req, res, next) => {
	Personne.find().then((data) => {
		// console.log(data);
		// recuperation position (in array) for change
		data[req.params.position] = req.body;
		// verify
		console.log("req.body:", req.body);
		// afficher new array
		res.json({ updateAllUsersDB: Personne });
	});
});

// delete last one
router.delete("/db/deletelast", (req, res, next) => {
	Personne.find().then((data) => res.json({ allUsers: data }));
	const listeBeforeUpdate = data;
	listeBeforeUpdate.pop();
	res.json({ updateAllUsersDB: Personne });
});

// delete element depuis sa position
router.delete("/db/deleteone/:name", (req, res, next) => {
	Personne.splice(req.params.name, 1);
	res.json({ updateAllUsersDB: Personne });
});

// delete all elements
router.delete("/db/deleteall", (req, res, next) => {
	Personne.find().then((data) => {
		data.splice(req.params.position, data.length);
		res.json({ updateAllUsersDB: Personne });
		save();
		// console.log(data);
	});
});

//

// delete last one
router.delete("/deletelast", (req, res, next) => {
	UserlistStatique.pop();
	res.json({ updateUsers: UserlistStatique });
});

// delete element depuis sa position
router.delete("/deleteone/:position", (req, res, next) => {
	UserlistStatique.splice(req.params.position, 1);
	res.json({ updateUsers: UserlistStatique });
});

// delete all elements
router.delete("/deleteall", (req, res, next) => {
	UserlistStatique.splice(req.params.position, UserlistStatique.length);
	res.json({ updateUsers: UserlistStatique });
});

//

// DB----------------------

let UserlistStatique = [
	{
		nom: "Doe",
		prenom: "John",
		age: 30,
		email: "john.doe@example.com",
		adresse: {
			rue: "123 Rue de la République",
			ville: "Paris",
			code_postal: "75001",
			pays: "France",
		},
		interets: ["lecture", "voyages", "musique"],
		date_inscription: "2023-11-06T10:00:00Z",
	},
	{
		nom: "Smith",
		prenom: "Alice",
		age: 25,
		email: "alice.smith@example.com",
		adresse: {
			rue: "456 Elm Street",
			ville: "New York",
			code_postal: "10001",
			pays: "États-Unis",
		},
		interets: ["sport", "cinéma", "cuisine"],
		date_inscription: "2023-11-06T11:15:00Z",
	},
	{
		nom: "Johnson",
		prenom: "Emma",
		age: 28,
		email: "emma.johnson@example.com",
		adresse: {
			rue: "789 Oak Avenue",
			ville: "Los Angeles",
			code_postal: "90001",
			pays: "États-Unis",
		},
		interets: ["art", "fitness", "jeux vidéo"],
		date_inscription: "2023-11-06T12:30:00Z",
	},
	{
		nom: "Martin",
		prenom: "Michael",
		age: 35,
		email: "michael.martin@example.com",
		adresse: {
			rue: "10 Downing Street",
			ville: "Londres",
			code_postal: "SW1A 2AA",
			pays: "Royaume-Uni",
		},
		interets: ["politique", "voyages", "photographie"],
		date_inscription: "2023-11-06T13:45:00Z",
	},
	{
		nom: "Garcia",
		prenom: "Sofia",
		age: 22,
		email: "sofia.garcia@example.com",
		adresse: {
			rue: "345 Calle Principal",
			ville: "Barcelone",
			code_postal: "08001",
			pays: "Espagne",
		},
		interets: ["danse", "gastronomie", "cinéma"],
		date_inscription: "2023-11-06T15:00:00Z",
	},
];

/* GET personnes listing. */
// router.get("/", function (req, res, next) {
// 	res.send("respond with a resource");
// });

// METHODS statique-----
// get all
router.get("/", (req, res, next) => {
	res.json({ Users: UserlistStatique });
});

// get one
router.get("/:id", (req, res, next) => {
	Personne.find().then((data) => {
		// console.log(data[1]);
		const personneId = req.params.id;
		res.json({ User: data[personneId] });
	});
});

// add
router.post("/adduser", (req, res, next) => {
	console.log(req.body);
	UserlistStatique.push(req.body);
	res.json({ updateUsers: UserlistStatique });
});

// update
router.put("/update/:position", (req, res, next) => {
	// console.log("req.params.position :", req.params.position);s
	// recuperation position (in array) for change
	UserlistStatique[req.params.position] = req.body.replacementUser;
	// ou en prenant tout le req.body
	UserlistStatique[req.params.position] = req.body;
	// verify
	// console.log("req.body:", req.body.replacementUser);
	// afficher new array
	res.json({ updateUsers: UserlistStatique });
});

// delete last one
router.delete("/deletelast", (req, res, next) => {
	UserlistStatique.pop();
	res.json({ updateUsers: UserlistStatique });
});

// delete element depuis sa position
router.delete("/deleteone/:position", (req, res, next) => {
	UserlistStatique.splice(req.params.position, 1);
	res.json({ updateUsers: UserlistStatique });
});

// delete all elements
router.delete("/deleteall", (req, res, next) => {
	UserlistStatique.splice(req.params.position, UserlistStatique.length);
	res.json({ updateUsers: UserlistStatique });
});

//
module.exports = router;
