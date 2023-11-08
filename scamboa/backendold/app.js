fetch("https://api.chucknorris.io/jokes/random")
	.then((response) => response.json())
	.then((data) => {
		console.log(data);
		return data.value;
	});

// test call db

require("./models/connection");
const Personne = require("./models/personnes");

Personne.find().then((data) => {
	console.log(data);
});

const newPersonne = new Personne({
	nom: "nomTest",
	prenom: "prenomTest",
	age: 33,
	email: "emailTest",
	adresse: {
		rue: "rueTest",
		ville: "villeTest",
		code_postal: "codePostalTest",
		pays: "paysTest",
	},
	interets: ["interetsTest"],
	date_inscription: new Date(),
});

newPersonne.save().then((newDoc) => {
	console.log(newDoc);
});
