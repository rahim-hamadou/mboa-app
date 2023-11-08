const mongoose = require("mongoose");

const personneSchema = mongoose.Schema({
	nom: String,
	prenom: String,
	age: Number,
	email: String,
	adresse: {
		rue: String,
		ville: String,
		code_postal: String,
		pays: String,
	},
	interets: [String],
	date_inscription: String,
});

const Personne = mongoose.model("personnes", personneSchema);

module.exports = Personne;
